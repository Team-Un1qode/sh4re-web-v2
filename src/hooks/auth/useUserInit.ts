import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../../store/useAuthStore";
import { getMyInfo } from "../../axios/user";
import type { User } from "../../types/auth/user";
import { useEffect } from "react";

interface UserResponse {
  data: {
    data: {
      me: User;
    };
  };
}

export const useInitUser = () => {
  const accessToken = localStorage.getItem("accessToken");
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);

  const queryResult = useQuery<UserResponse>({
    queryKey: ["me"],
    queryFn: getMyInfo,
    staleTime: 1000 * 60 * 5, // 5분 캐싱
    retry: false, // 실패해도 재시도 X
    enabled: !!accessToken,
  });

  const { data, isError, isSuccess } = queryResult;

  useEffect(() => {
    if (isError) {
      clearUser();
    }
  }, [isError, clearUser]);

  useEffect(() => {
    if (isSuccess && data) {
      setUser(data.data.data.me);
    }
  }, [isSuccess, data, setUser]);

  return queryResult;
};
