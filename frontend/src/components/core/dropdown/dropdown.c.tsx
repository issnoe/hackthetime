import React, { useState } from "react";
import "./dropdown.css";

export type DropDownProps = {
  menuOptions: string[];
};

const DropDown = () => {
  const [toogleDropDown, setToogleDropDown] = useState(false);
  return (
    <div className="dropdown-container">
      <button
        onClick={() => setToogleDropDown(true)}
        className="dropdown-button"
      >
        <span className="d-button-content">. . .</span>
      </button>
      {toogleDropDown && (
        <div
          className="dropdown-content"
          onMouseLeave={() => setToogleDropDown(false)}
        >
          <span>Edit</span>
          <span>Remove</span>
        </div>
      )}
    </div>
  );
};

export default DropDown;
