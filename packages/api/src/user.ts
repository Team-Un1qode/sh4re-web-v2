import type { MyInfoResponse } from "@sh4re/types";
import sh4reCustomAxios from "./sh4reCustomAxios";

export const getMyInfo = async () => {
  return (
    await sh4reCustomAxios.get<MyInfoResponse>("/user/me", {
      withCredentials: true,
    })
  ).data;
};
