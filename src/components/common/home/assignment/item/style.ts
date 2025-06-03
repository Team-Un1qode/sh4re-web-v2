import styled from "styled-components";

export interface StatusType {
  status: "누락됨" | "할당됨" | "제출됨";
}

export const Container = styled.div`
  width: 90%;
  min-height: 4rem;
  background-color: ${({ theme }) => theme.color.gray};
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray};
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
`;

export const TitleWrap = styled.div`
  font-size: 1.25rem;
  display: flex;
  gap: 0.75rem;
  color: ${({ theme }) => theme.color.black};
  align-items: center;
`;

export const Status = styled.div<StatusType>`
  font-weight: bold;
  color: ${({ status, theme }) =>
    status === "누락됨"
      ? theme.color.red
      : status === "할당됨"
      ? theme.color.main
      : status === "제출됨"
      ? theme.color.green
      : "black"};
`;

export const Period = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.dark};
`;

export const Icon = styled.img`
  width: 0.75rem;
`;
