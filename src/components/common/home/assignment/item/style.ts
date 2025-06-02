import styled from "styled-components";
import { COLOR } from "../../../../../style/color/color.ts";

export interface StatusType {
  status: "누락됨" | "할당됨" | "제출됨";
}

export const Container = styled.div`
  width: 90%;
  height: 4rem;
  background-color: white;
  border-bottom: 0.1rem solid ${COLOR.gray};
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
  color: ${COLOR.black};
  align-items: center;
`;

export const Status = styled.div<StatusType>`
  font-weight: bold;
  color: ${({ status }) =>
    status === "누락됨"
      ? COLOR.red
      : status === "할당됨"
      ? COLOR.main
      : status === "제출됨"
      ? COLOR.green
      : "black"};
`;

export const Period = styled.div`
  font-size: 1rem;
  color: ${COLOR.dark};
`;

export const Icon = styled.img`
  width: 0.75rem;
`;
