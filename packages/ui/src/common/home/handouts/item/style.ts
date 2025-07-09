import styled from "styled-components";

export interface HandOutsStatusType {
  status: "pptx" | "hwp" | "pdf" | "py" | "etc";
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  min-height: 4rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.borderGray};
  justify-content: space-between;
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

export const Status = styled.div`
  display: flex;
  align-items: center;
`;

export const Period = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.placeholder};
`;
