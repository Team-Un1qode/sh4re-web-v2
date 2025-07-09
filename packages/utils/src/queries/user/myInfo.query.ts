import {
  useSuspenseQuery,
  type UseSuspenseQueryOptions,
  type UseSuspenseQueryResult,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { getMyInfo } from "@sh4re/api";
import type { MyInfoResponse } from "@sh4re/types";
import { QUERY_KEYS } from "../queryKey";

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
