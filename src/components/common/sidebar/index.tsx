import * as S from "./style";
import HomeIcon from "../../../assets/icons/home.svg?react";
import HandoutsIcon from "../../../assets/icons/handouts.svg?react";
import CodeIcon from "../../../assets/icons/code.svg?react";
import TaskIcon from "../../../assets/icons/task.svg?react";
import AnnouncementIcon from "../../../assets/icons/announcement.svg?react";
import ProfileIcon from "../../../assets/icons/profile.svg?react";
import ThemeToggle from "./ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";

const sidebarItems = [
  { icon: HomeIcon, text: "홈", key: "/" },
  { icon: AnnouncementIcon, text: "공지사항", key: "/announcement" },
  { icon: CodeIcon, text: "코드", key: "/code" },
  { icon: TaskIcon, text: "과제 목록", key: "/task" },
  { icon: HandoutsIcon, text: "수업 자료", key: "/handouts" },
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
              isSelected={currentPath === key}
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
      <S.Profile>
        <S.ProfileIcon>
          <ProfileIcon />
        </S.ProfileIcon>
        {"채근영"}
        <ThemeToggle />
      </S.Profile>
    </S.Container>
  );
};

export default Sidebar;
