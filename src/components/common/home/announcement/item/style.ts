import styled from "styled-components";
import { COLOR } from "../../../../../style/color/color.ts";

export interface AnnouncementStatusType {
  status: "과제" | "공지";
}

export const Container = styled.div`
  display: flex;
  align-items: center;
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

export const Status = styled.div<AnnouncementStatusType>`
  font-weight: bold;
  color: ${({ status }) =>
    status === "과제" ? COLOR.orange : status === "공지" ? COLOR.red : "black"};
`;

export const Period = styled.div`
  font-size: 1rem;
  color: ${COLOR.dark};
`;
