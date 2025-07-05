import styled from "styled-components";
import { ElemText } from "../style";

export const Profile = styled(ElemText)`
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.mainText};
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
