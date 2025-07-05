export const UserRole = {
  STUDENT: "STUDENT",
  TEACHER: "TEACHER",
  ADMIN: "ADMIN",
} as const;

export interface School {
  name: string;
  code: string;
}
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export interface User {
  username: string;
  name: string;
  email: string;
  grade: number;
  classNo: number;
  studentNo: number;
  role: UserRole;
  school: School;
}
