import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { RegisterFormInputs } from "../../types/auth/register";
import sh4reCustomAxios from "../../axios/sh4reCustomAxios";

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

export default useRegister;
