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

export const HandOutsList = styled.div<{
  $variant?: "home" | "detail";
}>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;
