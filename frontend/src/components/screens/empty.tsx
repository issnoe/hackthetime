import React from "react";
import Link, { Props as LinkProps } from "../core/link";

const projects: LinkProps[] = [
  { name: "Matersoft", color: "tomato", timeToDo: 100, countPomodoros: 20 },
  { name: "ENa", color: "orange ", timeToDo: 1, countPomodoros: 10 },
  { name: "Tesis", color: "dodgerblue", timeToDo: 1, countPomodoros: 10 },
  { name: "Aptude", color: "MediumSeaGreen", timeToDo: 1, countPomodoros: 10 },
  { name: "Kidzzer", color: "SlateBlue", timeToDo: 1, countPomodoros: 10 },
  { name: "Documentos", color: "Violet", timeToDo: 1, countPomodoros: 5 },
  { name: "Tramites", color: "LightGray", timeToDo: 1, countPomodoros: 5 },
  { name: "KBX", color: "tomato", timeToDo: 1, countPomodoros: 5 },
  { name: "Learn", color: "tomato", timeToDo: 1, countPomodoros: 5 },
  { name: "Soles", color: "tomato", timeToDo: 100, countPomodoros: 5 },
];
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
