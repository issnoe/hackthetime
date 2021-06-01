import React, { useState } from "react";
import Loader from "../loader/loader.c";
import "./toaster.css";

export type ToasterProps = {
  message: string;
  visibility: boolean;
};

const Toaster = ({ message, visibility }: ToasterProps) => {
  const toogle = visibility
    ? "toaster-container show"
    : "toaster-container hide";
  return (
    <div className={toogle}>
      <div className="toaster-content">
        <p> {message}</p>
        <Loader></Loader>
      </div>
    </div>
  );
};

export default Toaster;
