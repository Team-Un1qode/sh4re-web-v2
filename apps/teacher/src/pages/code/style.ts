import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(378px, 1fr));
  justify-content: center;
  min-height: 100vh;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.color.selectedWhite};
`;

export const CodeContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);
  border-radius: 5px;
`;

export const CodeBox = styled.div`
  padding: 16px;
  overflow: hidden;
  height: 100%;
`;

export const CodePre = styled.pre`
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
`;

export const CodeText = styled.code`
  display: block;
  height: 100%;
  overflow: hidden;
  white-space: pre-wrap;
`;

export const CodeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.color.borderGray};
`;

export const CodeTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  font-weight: 400;
  align-self: center;
`;

export const StudentInfo = styled.div`
  font-size: 1rem;
  text-align: right;
  align-self: center;
`;

export const LikeBox = styled.div`
  display: flex;
  gap: 4px;
  cursor: default;
`;
