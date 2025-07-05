import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginFormInputs } from "../../types/auth/login";
import sh4reCustomAxios from "../../axios/sh4reCustomAxios";

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

      if (res) {
        alert(`${data.username}님 환영합니다!`);

        navigate("/");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    submit,
  };
};

export default useLogin;
