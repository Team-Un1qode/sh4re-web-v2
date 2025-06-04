import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.main};
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  padding: 3rem;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2.8fr;
  gap: 34px;
  width: 100%;
  height: 100%;
`;
