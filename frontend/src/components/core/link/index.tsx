import React, { useState } from "react";
import "./style.css";

type Props = {
  name: string;
  color: string;
  timeToDo?: number;
  countPomodoros?: number;
};
type PPin = {
  color: string;
};
const Pin = ({ color }: PPin) => (
  <span
    style={{
      width: "10px",
      height: "10px",
      borderRadius: " 50%",
      padding: "10px",
      backgroundColor: color,
    }}
  ></span>
);
const Link = ({ name, color, timeToDo = 0, countPomodoros = 0 }: Props) => {
  const [toogle, setToogle] = useState(false);
  const [tootleDrowdown, setTootleDrowdown] = useState(false);
  return (
    <span
      className="container"
      onMouseOver={() => setTootleDrowdown(true)}
      onMouseLeave={() => {
        setTootleDrowdown(false);
        setToogle(false);
      }}
    >
      <div
        className="details"
        onClick={() => {
          alert("LLama al container");
        }}
      >
        <Pin color={color} />
        <span className="ds">{name}</span>
      </div>
      {!tootleDrowdown && (
        <div className="box">
          <span className="badge">{timeToDo}h</span>
          <span className="badge">{countPomodoros}</span>
        </div>
      )}

      {tootleDrowdown && (
        <div className="dropdown">
          <button onClick={() => setToogle(true)} className="dropbtn">
            <span className="btn-content">. . .</span>
          </button>
          {toogle && (
            <div
              className="dropdown-content"
              onMouseLeave={() => setToogle(false)}
            >
              <span>Edit</span>
              <span>Remove</span>
            </div>
          )}
        </div>
      )}
    </span>
  );
};

export default Link;
