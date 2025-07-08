import React from "react";
import { useToastContext } from "../../../contexts/ToastContext";
import * as S from "./style";
import { Info, CheckCircle, AlertCircle, AlertTriangle, X } from "lucide-react";

type ToastType = "info" | "success" | "error" | "warning";

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToastContext();
  const [closingToasts, setClosingToasts] = React.useState<Set<string>>(
    new Set()
  );

  const iconMap: Record<ToastType, React.FC<{ size?: number }>> = {
    info: Info,
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
  };

  const handleCloseToast = (toastId: string) => {
    // 1. 닫히는 상태로 설정
    setClosingToasts((prev) => new Set(prev).add(toastId));

    // 2. 애니메이션 지속 시간 후 실제 제거
    setTimeout(() => {
      removeToast(toastId);
      setClosingToasts((prev) => {
        const newSet = new Set(prev);
        newSet.delete(toastId);
        return newSet;
      });
    }, 250);
  };

  if (toasts.length === 0) return null;

  return (
    <S.ToastContainer>
      {toasts.map((toast) => {
        const IconComponent = iconMap[toast.type as ToastType];
        const $isClosing = closingToasts.has(toast.id);

        return (
          <S.ToastItem key={toast.id} type={toast.type} $isClosing={$isClosing}>
            <S.ToastStatus>
              <IconComponent size={20} />
            </S.ToastStatus>
            <S.ToastMessage>{toast.message}</S.ToastMessage>
            <S.CloseButton onClick={() => handleCloseToast(toast.id)}>
              <X size={16} />
            </S.CloseButton>
          </S.ToastItem>
        );
      })}
    </S.ToastContainer>
  );
};

export default ToastContainer;
