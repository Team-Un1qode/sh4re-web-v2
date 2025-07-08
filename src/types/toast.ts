import React from "react";

export interface Toast {
  id: string;
  type: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
}

export interface ClosingToast {
  id: string;
}

export interface ToastContextType {
  toasts: Toast[];
  closingToasts: ClosingToast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}
