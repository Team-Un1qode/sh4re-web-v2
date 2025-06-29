import styled, { css } from "styled-components";

export const Container = styled.div<{ $variant: "home" | "detail" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 3px 24px 0px ${({ theme }) => theme.color.borderGray};
  border-radius: 0.25rem;
  overflow: hidden;

  ${(props) =>
    props.$variant === "home"
      ? css`
          background-color: ${({ theme }) => theme.color.background};

          &:first-child {
            grid-row: 1 / span 2;
          }
        `
      : css`
          min-height: 100vh;
          background-color: ${({ theme }) => theme.color.backgroundWhite};
        `}
`;

export const AssignmentList = styled.div<{
  $variant?: "home" | "detail";
}>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;

export const Title = styled.h2`
  width: 100%;
  margin: 3rem 1.5rem 1.5rem 11rem;
  font-size: 3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.mainText};
`;
