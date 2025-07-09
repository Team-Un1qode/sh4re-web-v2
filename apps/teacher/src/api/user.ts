import type { MyInfoResponse } from "../types/auth/user";
import sh4reCustomAxios from "./sh4reCustomAxios";

export const getMyInfo = async () => {
  return (
    await sh4reCustomAxios.get<MyInfoResponse>("/user/me", {
      withCredentials: true,
    })
  ).data;
};
