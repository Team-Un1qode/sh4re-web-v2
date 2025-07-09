// App Configuration
export const APP_CONFIG = {
  STUDENT_DOMAIN: 'sh4re.com',
  TEACHER_DOMAIN: 'teacher.sh4re.com',
  API_ENDPOINT: process.env.VITE_SERVER_URL || 'http://localhost:3000',
} as const;

// User Roles
export const USER_ROLES = {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  ADMIN: 'ADMIN',
} as const;

// Navigation Items for Student App
export const STUDENT_NAV_ITEMS = [
  { icon: "home", text: "홈", key: "/" },
  { icon: "announcement", text: "공지사항", key: "/announcement" },
  { icon: "code", text: "코드", key: "/code" },
  { icon: "task", text: "과제 목록", key: "/assignment" },
  { icon: "handouts", text: "수업 자료", key: "/handouts" },
  { icon: "profile", text: "프로필", key: "/profile" },
] as const;

// Navigation Items for Teacher App
export const TEACHER_NAV_ITEMS = [
  { icon: "home", text: "대시보드", key: "/" },
  { icon: "announcement", text: "공지사항 관리", key: "/announcement" },
  { icon: "code", text: "학생 코드 검토", key: "/code" },
  { icon: "task", text: "과제 관리", key: "/assignment" },
  { icon: "handouts", text: "수업 자료 관리", key: "/handouts" },
  { icon: "profile", text: "프로필", key: "/profile" },
] as const;