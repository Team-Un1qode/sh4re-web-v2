import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { LoginFormInputs } from "../../types/auth/login";

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const submit = async (data: LoginFormInputs) => {
    try {
      if (loading) {
        return;
      }
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/signin`,
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

export default useLogin;
