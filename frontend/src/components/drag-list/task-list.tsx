import React, { useState, useEffect, useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TimerDetails } from "../../contexts/Timer";
import { create_UUID } from "../../utils";
import Checkbox, { CheckboxCube, CheckboxSwitch } from "../checkbox/Checkbox";
import styles from './task-list.module.css';
import { useDispatch } from 'react-redux';
import { updateTaskFocusRequestAction_ } from "../../modules/time";


function Student({ student }) {
  return <div key={student.id}>io</div>
  // Renders out a draggable student
}


// do not re-render if the students list reference has not changed
const InnerList = React.memo(function InnerList(props: any) {
  return props.students.map((student: any) => (
    <Student student={student} />
  ));
});

function Students(props: { students: any[] }) {
  return (
    <Droppable droppableId="list">
      {(provided: any, snapshot: any) => (
        <div
          ref={provided.innerRef}
          style={{
            backgroundColor: snapshot.isDragging ? 'green' : 'lightblue',
          }}
          {...provided.droppableProps}
        >
          {/* only re-render if the students array reference changes */}
          <InnerList students={props.students} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
const SHOW_BUTTON_POMODORO = 5;
interface ITasks {
  description: string
  pomodoro: any
  project: any
  date: any
  id: string,
  status: boolean
}
const initialTask = {
  description: "",
  pomodoro: 1,
  project: "A",
  date: null,
  id: "",
};
function TasksList() {
  const [characters, updateCharacters] = useState([]);
  const [task, setTask] = useState(initialTask);
  const [showListDone, setShowListDone] = useState(false);
  const { whatAreYouDoing } = useContext(TimerDetails);
  useEffect(() => {
    const storege = localStorage.getItem("list");
    if (storege) {
      const lista = JSON.parse(storege);
      updateCharacters(lista);
    }
  }, []);

  function handleOnDragEnd(result) {
    /**
     * - Delete element by index
     * - Reorder array in order index
     * - TODO How to save the order? set a variable in each elelment?
     */
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);

    updateCharacters(items);
    localStorage.setItem("list", JSON.stringify(items));
  }

  const updateStatus = (id) => {
    const auxColl: any = [
      ...characters,
    ]
    const indexElement = auxColl.findIndex((element: any) => element.id == id)
    if (indexElement >= 0) {
      auxColl[indexElement].status = !auxColl[indexElement].status
      updateCharacters(auxColl);
      localStorage.setItem("list", JSON.stringify(auxColl));
    }

  }

  const renderButtonPomodoros = (task, readOnly = false) => {
    let renderElement: any = [];
    const displayButtons = readOnly ? task.pomodoro : SHOW_BUTTON_POMODORO;
    for (let index = 0; index < displayButtons; index++) {
      const isMarked = index < task.pomodoro ? "marked" : "nomarked";
      const isMarkedClass = index < task.pomodoro ? styles.marked : styles.nomarked;
      let element: any = [];
      if (readOnly) {
        element = (
          <span
            key={`button-pomodoro-${index}`}
            className={`${styles.pomodoro} ${isMarkedClass}`}
            onClick={() => {
              if (isMarked === "marked") {
                setTask({ ...task, pomodoro: index });
              }
              if (isMarked === "nomarked") {
                setTask({ ...task, pomodoro: index + 1 });
              }
            }}
          ></span>
        );
      } else {
        element = (
          <span
            key={`button-pomodoro-${index}`}
            className={`${styles.pomodoro} ${isMarkedClass}`}
            onClick={() => {
              if (isMarked === "marked") {
                setTask({ ...task, pomodoro: index });
              }
              if (isMarked === "nomarked") {
                setTask({ ...task, pomodoro: index + 1 });
              }
            }}
          ></span>
        );
      }
      renderElement.push(element);
    }
    return renderElement;
  };

  function BoxCheckBox({ status, id }) {
    return <div style={{ marginRight: '1rem' }}>
      <Checkbox status={status} id={id} onChange={() => updateStatus(id)} />
    </div>
  }

  function renderListDone(characters) {
    if (!showListDone) {
      return null
    }
    return characters.filter((e: ITasks) => e.status == true).map((task: ITasks, index) => {
      const { id, description, pomodoro, status } = task;
      return <ul key={index + '_ul_box'} className={styles.characters}><BoxElement provided={null} task={task} />
      </ul>

    })

  }
  function BoxElement({ provided, task }) {
    const dispatch = useDispatch();
    const setTaskFocus = (task: any) => dispatch(updateTaskFocusRequestAction_(task));
    const childElement = <><BoxCheckBox status={task.status} id={task.id} />
      <div style={{
        flex: 10,
        margin: "0 1rem"
      }}>
        <p>{task.description}</p>
      </div>

      {renderButtonPomodoros(task, true)}</>
    if (provided) {
      return <li
        /*  onClick={() => {
           setTaskFocus(task)
           console.log("task", JSON.stringify(task, null, 2))
 
         }} */
        onDoubleClick={() => {
          setTaskFocus(task)
          // whatAreYouDoing({ action: "NEW", taskId: task.id })
        }}
        key={task.id}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {childElement}
      </li>
    }
    return <li
      onDoubleClick={() => {
        whatAreYouDoing({ action: "NEW", taskId: task.id })
      }}
      key={task.id}
    >
      {childElement}
    </li>
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const id = create_UUID()
          const task_ = {
            ...task,
            date: new Date().toISOString(),
            id,
            status: false
          };
          const list: any = [...characters, task_];

          updateCharacters(list);
          localStorage.setItem("list", JSON.stringify(list));
          setTask(initialTask);
          //setTask(initialTask);
        }}
      >
        <div>
          <input
            className={styles.add}
            value={task.description}
            type={"text"}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            placeholder={"Add task to Project Name , press [Enter] to save "}
          ></input>
          {renderButtonPomodoros(task)}
        </div>
      </form>

      <div style={{ margin: "1rem 2px" }}>
        <CheckboxCube id="toogle-list-cube" status={true} onChange={() => setShowListDone(!showListDone)} />
      </div>



      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className={styles.characters}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.filter((e: ITasks) => e.status == false).map((task: ITasks, index) => {

                return (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <BoxElement key={task.id} provided={provided} task={task} />
                      /*      <li
                             onDoubleClick={() => {
                               whatAreYouDoing({ action: "NEW", taskId: task.id })
                             }}
                             key={task.id}
                             ref={provided.innerRef}
                             {...provided.draggableProps}
                             {...provided.dragHandleProps}
                           >
                             <BoxCheckBox status={task.status} id={task.id} />
                             <div style={{
                               flex: 10,
                               margin: "0 1rem"
                             }}>
                               <p>{task.description}</p>
                             </div>
     
                             {renderButtonPomodoros(task, true)}
                           </li> */
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

      </DragDropContext>
      {renderListDone(characters)}

    </div >
  );
}

export default TasksList;


