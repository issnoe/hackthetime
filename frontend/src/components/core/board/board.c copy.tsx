import React, { useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { fromEvent, Observable } from "rxjs";
import { takeUntil, mergeMap, map } from "rxjs/operators";

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
const Board = (props: ITaskList) => {
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
      {/*    <div className="origin" onDragOver={onDragOver} onDrop={onDrop}>
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
      </div> */}
      <DraggableComponent />
      <DraggableComponent />
      <DraggableComponent />
    </div>
  );
};

/**
 *
 * @param props
 * @description Basic Board with draggable
 * @returns
 */
const BoardBasic = (props: ITaskList) => {
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

type DragEvent = { x: number; y: number };
function createDragObservable<T extends PointerEvent>(
  up$: Observable<T>,
  down$: Observable<T>,
  move$: Observable<T>
): Observable<DragEvent> {
  let startPosition: DragEvent;
  return down$.pipe(
    mergeMap((e: any) => {
      startPosition = startPosition || { x: e.pageX, y: e.pageY };
      return move$.pipe(
        takeUntil(up$),
        map((e: any) => ({
          x: e.pageX - startPosition.x,
          y: e.pageY - startPosition.y,
        }))
      );
    })
  );
}

function useDraggable(draggableRef: React.RefObject<HTMLElement>) {
  const drag$ = useRef<Observable<DragEvent>>();
  useLayoutEffect(() => {
    if (!draggableRef.current) {
      return () => {};
    }
    const down$ = fromEvent<PointerEvent>(draggableRef.current, "pointerdown");
    const move$ = fromEvent<PointerEvent>(document, "pointermove");
    const up$ = fromEvent<PointerEvent>(document, "pointerup");
    drag$.current = createDragObservable(up$, down$, move$);
  }, [draggableRef]);

  return drag$;
}

function DraggableComponent() {
  const draggableDivRef: any = useRef<HTMLDivElement>();
  const drag$ = useDraggable(draggableDivRef);

  useLayoutEffect(() => {
    if (!drag$.current) {
      return () => {};
    }

    const dragSubscription = drag$.current.subscribe((e) => {
      if (!draggableDivRef.current) {
        return;
      }

      draggableDivRef.current.style.transform = `translateY(${e.y}px)`;
    });
    return () => {
      dragSubscription.unsubscribe();
    };
  }, [drag$]);

  return (
    <div
      ref={draggableDivRef}
      style={{ userSelect: "none", padding: "8px", backgroundColor: "#eee" }}
    >
      drag me
    </div>
  );
}

export default Board;
