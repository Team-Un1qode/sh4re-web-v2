import styled, { keyframes } from "styled-components";
import type { Toast } from "../../../types/toast";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
`;

export const ToastItem = styled.div<{
  type: Toast["type"];
  $isClosing?: boolean;
}>`
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 300px;
  height: 40px;

  animation: ${({ $isClosing }) => ($isClosing ? slideOut : slideIn)} 0.2s
    ease-out;

  background-color: ${({ type }) => {
    switch (type) {
      case "success":
        return "#7CCF00";
      case "error":
        return "#FB2C36";
      case "warning":
        return "#FFC502";
      case "info":
        return "#0095FF";
      default:
        return "#ffffff";
    }
  }};
  border-bottom: 4px solid #e6e6e6;
  color: ${({ theme }) => theme.color.mainText};
`;

export const ToastStatus = styled.div`
  display: flex;
  align-items: center;
`;

export const ToastMessage = styled.span`
  font-size: 14px;
  font-weight: 500;
  flex: 1;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
  color: inherit;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;
