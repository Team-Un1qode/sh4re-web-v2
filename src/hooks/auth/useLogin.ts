import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginFormInputs } from "../../types/auth/login";
import sh4reCustomAxios from "../../api/sh4reCustomAxios";

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const submit = async (data: LoginFormInputs) => {
    try {
      if (loading) {
        return;
      }
      setLoading(true);

      const res = await sh4reCustomAxios.post(`/api/auth/login`, data, {
        withCredentials: true,
      });

      const accessToken = res.data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      alert(`${data.username}님 환영합니다!`);
      navigate("/");
    } catch (err: any) {
      if (err.response?.data?.data?.code) {
        const errorCode = err.response.data.data.code;
        const errorMessage = err.response.data.data.message;

        switch (errorCode) {
          case "INVALID_CREDENTIALS":
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            break;
          case "ACCOUNT_LOCKED":
            alert("계정이 잠겨 있습니다.");
            break;
          case "ACCOUNT_DISABLED":
            alert("계정이 비활성화되었습니다.");
            break;
          case "AUTHENTICATION_FAILED":
            alert("인증에 실패하였습니다.");
            break;
          case "INVALID_TOKEN":
          case "EXPIRED_TOKEN":
          case "UNSUPPORTED_JWT":
          case "EMPTY_JWT":
          case "JWT_CLAIMS_EMPTY":
            alert("토큰이 유효하지 않습니다. 다시 로그인해주세요.");
            break;
          case "ALREADY_LOGGED_OUT_USER":
            alert("이미 로그아웃된 계정입니다.");
            break;
          case "INVALID_ARGUMENT":
            alert(
              "입력값이 올바르지 않습니다. 아이디와 비밀번호를 확인해주세요."
            );
            break;
          case "INTERNAL_SERVER_ERROR":
            alert(
              "서버에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
            );
            break;
          default:
            alert(errorMessage || "알 수 없는 오류가 발생했습니다.");
        }
      } else if (err.request) {
        alert("서버와 연결할 수 없습니다. 네트워크를 확인해주세요.");
      } else {
        alert("로그인 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }

      console.error("로그인 에러:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    submit,
  };
};

export default useLogin;
