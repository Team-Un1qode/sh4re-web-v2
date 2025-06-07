import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.background};
  align-items: center;
  box-shadow: 0px 3px 24px 0px ${({ theme }) => theme.color.borderGray};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.25rem;
  &:first-child {
    grid-row: 1 / span 2;
  }
`;

export const AssignmentList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
