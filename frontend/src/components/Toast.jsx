import React, { useEffect } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";

export const Toast = (error) => {
  const notify = () =>
    toast.error(error?.message, {
      className: "h-[50px] w-auto text-sm",
    });
  useEffect(() => {
    notify();
  }, []);
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
};
