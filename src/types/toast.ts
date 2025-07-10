export interface Toast {
  id: string;
  type: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
}
export interface ToastContextType {
  toasts: Toast[];
  closingToasts: Set<string>;
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}
