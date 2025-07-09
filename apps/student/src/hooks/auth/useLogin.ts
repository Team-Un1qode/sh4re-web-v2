import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToastContext } from "../../contexts/ToastContext";
import type { LoginFormInputs } from "../../types/auth/login";
import sh4reCustomAxios from "../../api/sh4reCustomAxios";

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { addToast } = useToastContext();
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

      navigate("/");
      addToast({
        type: "success",
        message: `${data.username}님 환영합니다!`,
        duration: 2500,
      });
    } catch (err: any) {
      if (err.response?.data?.data?.code) {
        const errorCode = err.response.data.data.code;
        const errorMessage = err.response.data.data.message;

        let toastMessage = "";

        switch (errorCode) {
          case "INVALID_CREDENTIALS":
            toastMessage = "아이디 또는 비밀번호가 일치하지 않습니다.";
            break;
          case "ACCOUNT_LOCKED":
            toastMessage = "계정이 잠겨 있습니다.";
            break;
          case "ACCOUNT_DISABLED":
            toastMessage = "계정이 비활성화되었습니다.";
            break;
          case "AUTHENTICATION_FAILED":
            toastMessage = "인증에 실패하였습니다.";
            break;
          case "INVALID_TOKEN":
          case "EXPIRED_TOKEN":
          case "UNSUPPORTED_JWT":
          case "EMPTY_JWT":
          case "JWT_CLAIMS_EMPTY":
            toastMessage = "토큰이 유효하지 않습니다. 다시 로그인해주세요.";
            break;
          case "ALREADY_LOGGED_OUT_USER":
            toastMessage = "이미 로그아웃된 계정입니다.";
            break;
          case "INVALID_ARGUMENT":
            toastMessage =
              "입력값이 올바르지 않습니다. 아이디와 비밀번호를 확인해주세요.";
            break;
          case "INTERNAL_SERVER_ERROR":
            toastMessage =
              "서버에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";
            break;
          default:
            toastMessage = errorMessage || "알 수 없는 오류가 발생했습니다.";
        }

        addToast({
          type: "error",
          message: toastMessage,
          duration: 2500,
        });
      } else if (err.request) {
        addToast({
          type: "error",
          message: "서버와 연결할 수 없습니다. 네트워크를 확인해주세요.",
          duration: 2500,
        });
      } else {
        addToast({
          type: "error",
          message: "로그인 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
          duration: 2500,
        });
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
