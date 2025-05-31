import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { RegisterFormInputs } from "../../types/auth/register";

const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const submit = async (data: RegisterFormInputs) => {
    try {
      if (loading) {
        return;
      }
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/signup`,
        data
      );

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
