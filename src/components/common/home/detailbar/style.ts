import styled from "styled-components";
import { COLOR } from "../../../../style/color/color";

export const Container = styled.div`
  width: 90%;
  padding: 1.5rem 0;
  box-sizing: border-box;
`;

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  font-weight: 600;
  color: ${COLOR.black};
`;

export const Icon = styled.img`
  height: 100%;
`;

export const DetailWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${COLOR.dark};
  cursor: pointer;
  user-select: none;
`;

export const DetailIcon = styled.img`
  height: 1.25rem;
`;

export const AssignmentList = styled.div`
  margin-top: 2rem;
`;

export const AssignmentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #ececec;
  box-sizing: border-box;
`;

export const AssignmentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Status = styled.span`
  color: ${COLOR.red};
  font-weight: bold;
  font-size: 1.4rem;
`;

export const AssignmentTitle = styled.span`
  font-size: 1.25rem;
  color: ${COLOR.black};
`;

export const DueDate = styled.span`
  font-size: 1.15rem;
  color: ${COLOR.dark};
`;

export const ArrowIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
