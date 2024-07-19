import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastList, removeToast: handleDismiss } =
    React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            message={toast.message}
            variant={toast.variant}
            handleDismiss={() => handleDismiss(toast.id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
