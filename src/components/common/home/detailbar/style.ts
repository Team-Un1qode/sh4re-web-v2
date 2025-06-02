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
