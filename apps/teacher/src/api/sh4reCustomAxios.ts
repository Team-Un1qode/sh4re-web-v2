import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from "axios";

const ACCESS_TOKEN_KEY = "accessToken";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

const setAccessToken = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN_KEY, token);

// custom axios 인스턴스
const sh4reCustomAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 보낼 때마다 accessToken 있으면 헤더에 자동으로 넣어줌
sh4reCustomAxios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    // 토큰 있는 경우 -> Authorization 헤더에 붙이기
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 받을 때 accessToken 만료돼서 401 뜨면 refreshToken으로 자동 갱신
sh4reCustomAxios.interceptors.response.use(
  // 정상 응답이면 그냥 바로 반환
  (response: AxiosResponse) => response,
  // 에러 났을 때 처리
  async (error: AxiosError) => {
    // 원래 요청 정보 복사해두기 (재시도할 때 필요)
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // 401 에러 + 아직 재시도 안 했을 때만 (무한루프 방지용)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 재시도했는지 표시

      try {
        // refreshToken은 쿠키에 있다고 가정해서 withCredentials: true로 요청
        const res = await axios.post(`${SERVER_URL}/api/auth/refresh`, null, {
          withCredentials: true,
        });

        // 새 accessToken
        const { accessToken } = res.data.data;

        setAccessToken(accessToken);

        // 원래 하려던 요청에 새 토큰 넣고 다시 보내기
        if (originalRequest.headers)
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return sh4reCustomAxios(originalRequest);
      } catch (refreshError) {
        // refreshToken도 만료됐거나 실패하면 그냥 accessToken 지우고 로그인 페이지로 보냄
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default sh4reCustomAxios;
