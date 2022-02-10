import React from "react";
import { ToastContainer } from "react-toastify";
// import styles from "./Notification.module.css";
import "react-toastify/dist/ReactToastify.css";


export const Notification = () => {
  return (
    <ToastContainer
      // @ts-ignore
    //   toastClassName={({ type }) => contextClass[type || "default"]}
    //   bodyClassName={() => styles.body}
      autoClose={3000}
    />
  );
};
