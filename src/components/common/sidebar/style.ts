import styled from "styled-components";

export const Container = styled.div`
  width: 18rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 4px 4px 20px 0px ${({ theme }) => theme.color.borderGray};
  background-color: ${({ theme }) => theme.color.background};
`;

export const Content = styled.div`
  padding: 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Logo = styled.img`
  width: 6rem;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Elem = styled.div<{ isSelected: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 3rem;
  color: ${({ theme }) => theme.color.mainText};
  cursor: pointer;
  gap: 1.5rem;
  border-radius: 0.25rem;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.selectedWhite : "transparent"};
`;

export const ProfileIcon = styled.div`
  width: 1.75rem;
  display: flex;
  align-items: center;
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.mainBlue};
  }
`;

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.25rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.mainBlue};
  }
`;

export const ElemText = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Profile = styled(ElemText)`
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.mainText};
`;
