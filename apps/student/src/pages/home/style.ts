import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.color.backgroundWhite};
  color: ${({ theme }) => theme.color.mainBlue};
  height: 100vh;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundWhite};
  padding: 3rem;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2.8fr;
  gap: 3rem;
  width: 100%;
  height: 100%;
`;
