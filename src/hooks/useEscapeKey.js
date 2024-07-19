import React from "react";

function useEscapeKey(escapeAction) {
  React.useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        escapeAction();
      }
    }
    window.addEventListener("keydown", handleEscapeKey);

    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [escapeAction]);
}

export default useEscapeKey;
