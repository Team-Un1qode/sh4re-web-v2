import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  height: 100%;
  gap: 2rem;
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
  gap: 1rem;
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
`;

export const CodeTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.mainText};
`;

export const StudentInfo = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.mainText};
`;

export const CodeDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 3rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.background};
`;

export const CodeDescriptionTitle = styled.div`
  font-size: 1.5rem;
`;

export const CodeDescription = styled.div`
  font-size: 1.3rem;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.placeholder};
  margin: 0.5rem 0;
`;
