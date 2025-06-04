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
  box-shadow: 4px 4px 20px 0px ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.white};
`;

export const Content = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Logo = styled.img`
  width: 6rem;
`;
// 리스트 전체
export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
// 리스트 각각 요소
export const Elem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 3rem;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
  gap: 1.5rem;
  border-radius: 0.25rem;
  &:first-child {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.25rem;
  padding-left: 1rem;
`;

export const ElemText = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Profile = styled(ElemText)`
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.black};
`;

export const ProfileIcon = styled.img`
  width: 1.75rem;
`;
