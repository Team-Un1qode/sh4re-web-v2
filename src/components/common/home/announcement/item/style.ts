import styled from "styled-components";

export interface AnnouncementStatusType {
  status: "과제" | "공지";
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 4rem;
  background-color: ${({ theme }) => theme.color.gray};
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray};
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

export const Status = styled.div<AnnouncementStatusType>`
  font-weight: bold;
  color: ${({ status, theme }) =>
    status === "과제"
      ? theme.color.orange
      : status === "공지"
      ? theme.color.red
      : "black"};
`;

export const Period = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.dark};
`;
