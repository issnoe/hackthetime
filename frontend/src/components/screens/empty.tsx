import React, { useState } from 'react';
import Board from '../core/board/board.c';
import Link from '../core/link/link.c';
import Toaster from '../core/toaster/toaster.c';
import TaskList from '../drag-list/task-list';
export type ITaskList = {
  tasks: any[];
};
const EmpyScreen = (props: ITaskList) => {
  const [toogleToaster, toogleToasterFn] = useState(false);

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
      {/*  <Toaster message="Luis " visibility={toogleToaster}></Toaster>
      <Board {...props}></Board> */}
      <TaskList />
    </div>
  );
};

export default EmpyScreen;
