"use client";

import { Toaster } from "react-hot-toast";

const ToasterMessage = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 3500,
        style: {
          background: "rgba(0, 0, 0, 0.75)",
          color: "#d1fae5",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(16, 185, 129, 0.4)",
          borderRadius: "14px",
          boxShadow: "0 10px 30px rgba(16, 185, 129, 0.15)",
          fontSize: "14px",
        },
      }}
    />
  );
};

export default ToasterMessage;
