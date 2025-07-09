import * as S from "./style";
import HomeIcon from "../../../assets/icons/home.svg?react";
import HandoutsIcon from "../../../assets/icons/handouts.svg?react";
import CodeIcon from "../../../assets/icons/code.svg?react";
import TaskIcon from "../../../assets/icons/task.svg?react";
import AnnouncementIcon from "../../../assets/icons/announcement.svg?react";
import ProfileIcon from "../../../assets/icons/profile.svg?react";
import { useLocation, useNavigate } from "react-router-dom";
import { Suspense } from "react";
import SideBarAccount from "./account";

const sidebarItems = [
  { icon: HomeIcon, text: "대시보드", key: "/" },
  { icon: AnnouncementIcon, text: "공지사항 관리", key: "/announcement" },
  { icon: CodeIcon, text: "학생 코드 검토", key: "/code" },
  { icon: TaskIcon, text: "과제 관리", key: "/assignment" },
  { icon: HandoutsIcon, text: "수업 자료 관리", key: "/handouts" },
  { icon: ProfileIcon, text: "프로필", key: "/profile" },
];

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Content>
        <S.Logo src='/sh4reLogo.svg' />
        <S.List>
          {sidebarItems.map(({ icon: IconComponent, text, key }) => (
            <S.Elem
              key={key}
              $isselected={
                key == "/" ? currentPath === "/" : currentPath.startsWith(key)
              }
              onClick={() => navigate(`${key}`)}
            >
              <S.Icon>
                <IconComponent />
              </S.Icon>
              <S.ElemText>{text}</S.ElemText>
            </S.Elem>
          ))}
        </S.List>
      </S.Content>
      <Suspense
        fallback={
          <h1 style={{ color: "white", fontSize: "100px" }}>Loading...</h1>
        }
      >
        <SideBarAccount />
      </Suspense>
    </S.Container>
  );
};

export default Sidebar;
