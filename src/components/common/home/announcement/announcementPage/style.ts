import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  align-items: center;
  box-shadow: 0px 3px 24px 0px ${({ theme }) => theme.color.grey};
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
`;

export const AssignmentList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
