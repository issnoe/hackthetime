import React, { useState } from "react";
import Link from "../core/link/link.c";
import Toaster from "../core/toaster/toaster.c";
type ITaskList = {
  tasks: any[];
};
const EmpyScreen = (props: ITaskList) => {
  const [toogleToaster, toogleToasterFn] = useState(false);
  const drag = (event: any) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.currentTarget.style.backgroundColor = "yellow";
  };
  const onDragOver = (event: any) => {
    event.preventDefault();
  };

  const onDrop = (event: any) => {
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
  };
  return (
    <div>
      {/*       <button
        onClick={() => {
          toogleToasterFn(!toogleToaster);
        }}
      >
        {`${!toogleToaster ? "show" : "hide"} toaster`}
      </button>
       */}
      <Toaster message="Luis " visibility={toogleToaster}></Toaster>
      {/*  <ul>
        {props.tasks.map((task, index) => (
          <li className="task" draggable="true" value={task.text}>
            {task.task}
          </li>
        ))}
      </ul> */}

      <div className="example-parent">
        <div className="example-origin" onDragOver={onDragOver} onDrop={onDrop}>
          {props.tasks.map((task, index) => (
            <div
              id="draggable-1"
              className="example-draggable"
              draggable={true}
              onDragStart={drag}
            >
              {task.task}
            </div>
          ))}
        </div>

        <div
          className="example-dropzone"
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          dropzone
        </div>
      </div>
    </div>
  );
};

export default EmpyScreen;
