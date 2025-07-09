import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  padding: 3rem 0 1.5rem 0;
  box-sizing: border-box;
`;

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.mainText};
`;
