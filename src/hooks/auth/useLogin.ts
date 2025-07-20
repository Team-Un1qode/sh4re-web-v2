import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginFormInputs } from "../../types/auth/login";
import sh4reCustomAxios from "../../api/sh4reCustomAxios";
import { toast } from "react-toastify";

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

      navigate("/");
      toast.success(`${data.username}님 환영합니다!`);
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
          "로그인 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
        );
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
