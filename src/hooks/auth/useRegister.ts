import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { RegisterFormInputs } from "../../types/auth/register";
import sh4reCustomAxios from "../../api/sh4reCustomAxios";
import { toast } from "react-toastify";

const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const submit = async (data: RegisterFormInputs) => {
    try {
      if (loading) {
        return;
      }
      setLoading(true);

      const res = await sh4reCustomAxios.post(`/api/auth/register`, data, {
        withCredentials: true,
      });

      if (res) {
        navigate("/");
        toast.success("회원가입이 완료되었습니다. 환영합니다!");
      }
    } catch (err: any) {
      if (err.response?.data?.data?.code) {
        const errorCode = err.response.data.data.code;
        const errorMessage = err.response.data.data.message;

        let toastMessage = "";

        switch (errorCode) {
          case "ALREADY_EXISTS_USERNAME":
            toastMessage =
              "이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.";
            break;
          case "AUTHENTICATION_FAILED":
            toastMessage = "회원가입 처리 중 인증에 실패했습니다.";
            break;
          case "SCHOOL_NOT_FOUND":
            toastMessage =
              "해당 학교를 찾을 수 없습니다. 학교 정보를 확인해주세요.";
            break;
          case "INVALID_ARGUMENT":
            toastMessage =
              "입력값이 올바르지 않습니다. 모든 필드를 올바르게 입력했는지 확인해주세요.";
            break;
          case "INTERNAL_SERVER_ERROR":
            toastMessage =
              "서버에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";
            break;
          default:
            toastMessage =
              errorMessage || "회원가입 중 알 수 없는 오류가 발생했습니다.";
        }

        toast.error(toastMessage);
      } else if (err.request) {
        toast.error("서버와 연결할 수 없습니다. 네트워크를 확인해주세요.");
      } else {
        toast.error(
          "회원가입 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
        );
      }
      console.error("회원가입 에러:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    submit,
  };
};

export default useRegister;
