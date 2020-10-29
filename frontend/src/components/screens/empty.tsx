import React from "react";
import { projects } from "../../data/proyects";
import Link from "../core/link/link.c";

const EmpyScreen = () => (
  <div>
    <h1>Start the best </h1>
    {projects.map((project) => (
      <Link {...project} />
    ))}
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
