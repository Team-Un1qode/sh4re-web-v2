import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 3rem;
  height: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.color.backgroundWhite};
`;

export const CodeContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 80%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 5px;
`;

export const CodePre = styled.pre`
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
`;

export const CodeText = styled.code`
  font-size: 1.5rem;
  display: block;
  height: 100%;
  overflow: hidden;
  white-space: pre-wrap;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  width: 50%;
  height: 80%;
  background-color: ${({ theme }) => theme.color.backgroundWhite};
  border-radius: 0 0 5px 5px;
`;

export const InfoTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const CodeTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.mainText};
`;

export const StudentInfo = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.mainText};
  margin-top: 0.5rem;
`;
