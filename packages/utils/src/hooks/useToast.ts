import { useState, useCallback } from "react";
import type { Toast } from "@sh4re/types";

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [closingToasts, setClosingToasts] = useState<Set<string>>(new Set());

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: Toast = {
      ...toast,
      id,
      duration: toast.duration || 3000,
    };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, newToast.duration);
  }, []);

  const removeToast = useCallback((id: string)=> {
    // 1. 닫히는 상태로 설정
    setClosingToasts((prev) => new Set(prev).add(id));

    // 2. 애니메이션 지속 시간 후 실제 제거
    setTimeout(() => {
      removeToastFromState(id);
      setClosingToasts((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 250);
  }, [])

  const removeToastFromState = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return {
    toasts,
    closingToasts,
    addToast,
    removeToast,
  };
};
