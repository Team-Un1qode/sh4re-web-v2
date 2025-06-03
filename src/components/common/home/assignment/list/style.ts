import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray};
  box-shadow: 0px 3px 24px 0px ${({ theme }) => theme.color.grey};
  border-radius: 0.25rem;
  overflow: hidden;
  &:first-child {
    grid-row: 1 / span 2;
  }
`;

export const AssignmentList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;
