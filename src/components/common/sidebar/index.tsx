import * as S from "./style";
import HomeIcon from "../../../assets/icons/home.svg?react";
import ClassIcon from "../../../assets/icons/class.svg?react";
import CodeIcon from "../../../assets/icons/code.svg?react";
import TaskIcon from "../../../assets/icons/task.svg?react";
import AnnouncementIcon from "../../../assets/icons/announcement.svg?react";
import ProfileIcon from "../../../assets/icons/profile.svg?react";
import ThemeToggle from "./ThemeToggle";

const sidebarItems = [
  { icon: HomeIcon, text: "홈" },
  { icon: ClassIcon, text: "수업" },
  { icon: CodeIcon, text: "코드" },
  { icon: TaskIcon, text: "과제" },
  { icon: AnnouncementIcon, text: "공지" },
];

const Sidebar = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo src='/sh4reLogo.svg' />
        <S.List>
          {sidebarItems.map(({ icon: IconComponent, text }) => (
            <S.Elem key={text}>
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
