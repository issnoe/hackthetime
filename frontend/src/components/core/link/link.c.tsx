import React, { useState } from "react";
import DropDown from "../dropdown/dropdown.c";
import "./link.css";

type PinProps = {
  color: string;
};
const Pin = ({ color }: PinProps) => (
  <span
    style={{
      width: "5px",
      height: "5px",
      borderRadius: " 50%",
      padding: "7px",
      backgroundColor: color,
    }}
  ></span>
);
export type LinkProps = {
  name: string;
  color: string;
  timeToDo?: number;
  countPomodoros?: number;
};

const Link = ({ name, color, timeToDo = 0, countPomodoros = 0 }: LinkProps) => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <span
      className="link-container"
      onMouseOver={() => setToogleMenu(true)}
      onMouseLeave={() => {
        setToogleMenu(false);
        //setToogleDropDown(false);
      }}
    >
      <div
        className="link-left"
        onClick={() => {
          alert("LLama al container");
        }}
      >
        <Pin color={color} />
        <span className="link-left-name">{name}</span>
      </div>
      {!toogleMenu && (
        <div className="link-box">
          <span className="link-badge">{timeToDo}h</span>
          <span className="link-badge">{countPomodoros}</span>
        </div>
      )}
      {toogleMenu && <DropDown></DropDown>}
    </span>
  );
};

export default Link;
