import sh4reCustomAxios from "./sh4reCustomAxios";

export const getMyInfo = async () => {
  return await sh4reCustomAxios.get("/user/me", {
    withCredentials: true,
  });
};
