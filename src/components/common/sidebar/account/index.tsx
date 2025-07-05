import * as S from "./style";
import ThemeToggle from "../ThemeToggle";
import ProfileIcon from "../../../../assets/icons/profile.svg?react";
import { useGetMyInfoQuery } from "../../../../queries/user/myInfo.query";

const SideBarAccount = () => {
  const { data } = useGetMyInfoQuery();
  const user = data?.data?.data?.me;
  return (
    <>
      {user && ( // 2항 연산자
        <S.Profile>
          <S.ProfileIcon>
            <ProfileIcon />
          </S.ProfileIcon>
          {user.name}
          <ThemeToggle />
        </S.Profile>
      )}
    </>
  );
};

export default SideBarAccount;
