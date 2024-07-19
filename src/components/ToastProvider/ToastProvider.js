import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const value = React.useMemo(() => {
    function addToast(message, variant) {
      const newToast = {
        message,
        variant,
        id: crypto.randomUUID(),
      };

      setToastList([...toastList, newToast]);
    }

    function removeToast(toastId) {
      const newToastList = [...toastList];

      newToastList.splice(
        newToastList.findIndex((toast) => toast.id === toastId),
        1
      );
      setToastList(newToastList);
    }
    return { toastList, addToast, removeToast };
  }, [toastList]);

  useEscapeKey(() => setToastList([]));

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
