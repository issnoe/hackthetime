import React from "react";
import Link from "../core/link";

const EmpyScreen = () => (
  <div>
    <h1>Start the best </h1>
    <Link name="eNa" color="red" />
    <Link name="hjgj gjh gjgjg gjh" color="red" />
    <div className="dropdown">
      <button className="dropbtn">
        <span className="btn-content">. . .</span>
      </button>
      <div className="dropdown-content">
        <span>Edit</span>
        <span>Remove</span>
      </div>
    </div>
  </div>
);

export default EmpyScreen;
