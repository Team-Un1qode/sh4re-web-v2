import styled from "styled-components";

export interface StatusType {
  status: "누락됨" | "할당됨" | "제출됨";
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  min-height: 4rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.borderGray};
  padding: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export const TitleWrap = styled.div`
  font-size: 1.25rem;
  display: flex;
  gap: 0.75rem;
  color: ${({ theme }) => theme.color.mainText};
  align-items: center;
`;

export const Status = styled.div<StatusType>`
  font-weight: bold;
  color: ${({ status, theme }) =>
    status === "누락됨"
      ? theme.color.mainRed
      : status === "할당됨"
      ? theme.color.mainBlue
      : status === "제출됨"
      ? theme.color.mainGreen
      : "black"};
`;

export const Period = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.placeholder};
`;

export const Icon = styled.div`
  width: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.mainText};
`;
