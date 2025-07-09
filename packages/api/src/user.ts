// Copy the interface locally for now
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
import sh4reCustomAxios from "./sh4reCustomAxios";

export const getMyInfo = async () => {
  return (
    await sh4reCustomAxios.get<MyInfoResponse>("/user/me", {
      withCredentials: true,
    })
  ).data;
};
