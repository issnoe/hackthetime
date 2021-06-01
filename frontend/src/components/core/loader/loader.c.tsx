import React, { useState } from "react";
import "./loader.css";

export type LoaderProps = {
  message?: string;
};

const Loader = ({ message }: LoaderProps) => {
  return (
    <span>
      <i className="loading"></i>
    </span>
  );
};

export default Loader;
