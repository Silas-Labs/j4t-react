import React, { useEffect } from "react";
import { toast, ToastContainer, Zoom } from "react-toastify";

export const Toast = ({ error }) => {
  const notifySuccess = () =>
    toast.success(error.message, {
      className: "h-[50px] w-auto text-sm",
    });

  const notifyError = () =>
    toast.error(error.message, {
      className: "h-[50px] w-auto text-sm",
    });
  useEffect(() => {
    error.success ? notifySuccess() : notifyError();
  }, []);
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      draggable
      pauseOnHover
      pauseOnFocusLoss={true}
      theme="light"
      transition={Zoom}
    />
  );
};
//className: "h-[50px] w-auto text-sm",
