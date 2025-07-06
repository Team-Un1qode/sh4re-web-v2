import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { getMyInfo } from "../../api/user";
import type { MyInfoResponse } from "../../types/auth/user";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyInfoQuery = (
  options?: Partial<UseQueryOptions<MyInfoResponse, AxiosError>>
): UseQueryResult<MyInfoResponse, AxiosError> => {
  const accessToken = localStorage.getItem("accessToken");

  return useQuery<MyInfoResponse, AxiosError>({
    queryKey: QUERY_KEYS.myInfo,
    queryFn: getMyInfo,
    staleTime: 1000 * 60 * 5,
    retry: false,
    enabled: !!accessToken,
    ...options,
  });
};
