import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
  type UseSuspenseQueryResult,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";
// Copy the interfaces locally for now
export interface User {
  username: string;
  name: string;
  email: string;
  grade: number;
  classNo: number;
  studentNo: number;
  role: string;
  school: {
    name: string;
    code: string;
  };
}

export interface MyInfoResponse {
  data: {
    me: User;
  };
}

import sh4reCustomAxios from "../../../api/src/sh4reCustomAxios";
import { QUERY_KEYS } from "../queryKey";

export const getMyInfo = async () => {
  return (
    await sh4reCustomAxios.get<MyInfoResponse>("/user/me", {
      withCredentials: true,
    })
  ).data;
};

export const useGetMyInfoQuery = (
  options?: Partial<UseSuspenseQueryOptions<MyInfoResponse, AxiosError>>
): UseSuspenseQueryResult<MyInfoResponse, AxiosError> => {
  const accessToken = localStorage.getItem("accessToken");

  return useSuspenseQuery<MyInfoResponse, AxiosError>({
    queryKey: QUERY_KEYS.myInfo,
    queryFn: accessToken ? getMyInfo : undefined,
    staleTime: 1000 * 60 * 5,
    retry: false,
    ...options,
  });
};
