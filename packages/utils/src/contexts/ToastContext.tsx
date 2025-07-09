import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useToast } from "../hooks/useToast";
import type { ToastContextType } from "../../../types/src/toast";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const { toasts, closingToasts, addToast, removeToast } = useToast();

  return (
    <ToastContext.Provider value={{ toasts, closingToasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};
