import React, { useRef, useLayoutEffect } from "react";
import "./board.css";
const colorsMarked = {
  selected: "yellow",
  unselected: "#ffffff",
};
export type BoardProps = {
  message: string;
  visibility: boolean;
};
type ITaskList = {
  tasks: any[];
};

/**
 *
 * @param props
 * @description  Board sortable
 * @returns
 */

/*
 * TODO Check list
 * - Sort on json
 * - Evnt pick and move when the user click on item more all node to second click
 * - como funciona sord documentar
 *
 */
const BoardNew = (props: ITaskList) => {
  const onDrag = (event: any) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.currentTarget.style.backgroundColor = colorsMarked.selected;
  };
  const onDragOver = (event: any) => {
    event.preventDefault();
    console.log(event);
  };

  const onDrop = (event: any) => {
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
    // event.currentTarget.style.backgroundColor = colorsMarked.unselected;
  };
  return (
    <div className="parent">
          <div className="origin" onDragOver={onDragOver} onDrop={onDrop}>
        {}
        {props.tasks &&
          props.tasks
            .sort((a, b) => a.sort + b.sort)
            .map((task, index) => (
              <React.Fragment>
                <div
                  key={task.id}
                  id={task.id}
                  className="draggable"
                  draggable={true}
                  onDragStart={onDrag}
                >
                  {task.task}
                </div>
              </React.Fragment>
            ))}
      </div> 
     
    </div>
  );
};

/**
 *
 * @param props
 * @description Basic Board with draggable
 * @returns
 */
 const Board = (props: ITaskList) => {
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
    <div className="parent">
      <div className="origin" onDragOver={onDragOver} onDrop={onDrop}>
        {props.tasks.map((task, index) => (
          <div
            key={task.id}
            id={task.id}
            className="draggable"
            draggable={true}
            onDragStart={drag}
          >
            {task.task}
          </div>
        ))}
      </div>

      <div className="dropzone" onDragOver={onDragOver} onDrop={onDrop}>
        dropzone
      </div>
    </div>
  );
};



export default Board;
