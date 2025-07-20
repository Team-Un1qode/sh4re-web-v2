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
      if (err.response) {
        const errorMessage =
          err.response.data?.data?.message ||
          err.response.data?.message ||
          "요청이 올바르지 않습니다.";
        toast.error(errorMessage);
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
