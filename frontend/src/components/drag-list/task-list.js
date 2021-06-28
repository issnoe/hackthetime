import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './task-list.css';

const SHOW_BUTTON_POMODORO = 5;
const initialTask = {
  description: '',
  pomodoro: 1,
  project: 'A',
  date: null,
  id: '',
};
function TasksList() {
  const [characters, updateCharacters] = useState([]);
  const [task, setTask] = useState(initialTask);

  useEffect(() => {
    const storege = localStorage.getItem('list');
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

    updateCharacters(items);
    localStorage.setItem('list', JSON.stringify(items));
  }

  const renderButtonPomodoros = (task, readOnly = false) => {
    let renderElement = [];
    const displayButtons = readOnly ? task.pomodoro : SHOW_BUTTON_POMODORO;
    for (let index = 0; index < displayButtons; index++) {
      const isMarked = index < task.pomodoro ? 'marked' : 'nomarked';
      let element = [];
      if (readOnly) {
        element = (
          <>
            <span
              key={`button-pomodoro-${index}`}
              className={`pomodoro-button ${isMarked}`}
            ></span>
          </>
        );
      } else {
        element = (
          <span
            key={`button-pomodoro-${index}`}
            className={`pomodoro-button ${isMarked}`}
            onClick={() => {
              if (isMarked === 'marked') {
                setTask({ ...task, pomodoro: index });
              }
              if (isMarked === 'nomarked') {
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

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const id = Math.random(1, 100);
          const task_ = {
            ...task,
            date: new Date(),
            id,
          };
          const list = [...characters, task_];

          updateCharacters(list);
          localStorage.setItem('list', JSON.stringify(list));
          setTask(initialTask);
          //setTask(initialTask);
        }}
      >
        <div>
          <input
            className="add-input"
            value={task.description}
            type={'text'}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            placeholder={'Add task to Project Name , press [Enter] to save '}
          ></input>
          {renderButtonPomodoros(task)}
        </div>
      </form>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map((task, index) => {
                const { id, description, pomodoro } = task;
                const d = id.toString();
                console.log(d);
                return (
                  <Draggable key={d} draggableId={d} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{description}</p>
                        {renderButtonPomodoros(task, true)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TasksList;
