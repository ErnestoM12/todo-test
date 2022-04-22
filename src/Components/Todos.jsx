import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import update from "immutability-helper";
import {
  addTodo,
  doneTodo,
  deleteTodo,
  changeOrder,
} from "../redux/actions/todoActions";
import TodoList from "./TodoList";
import styles from "../styles/todos.module.css";

// simple way to check whether the device support touch
const isTouchDevice = () => {
  if ("ontouchstart" in window) {
    return true;
  }
  return false;
};
// Assigning backend based on touch support on the device
const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

const Todos = ({ todo, addTodo, doneTodo, deleteTodo, changeOrder }) => {
  const [Items, setItems] = useState(todo.todos);

  useEffect(() => {
    setItems(todo.todos);
  }, [todo]);

  useEffect(() => {
    changeOrder(Items);
  }, [Items]);

  // handle move item
  const moveTodo = (dragIndex, hoverIndex) => {
    const draggedImage = Items[dragIndex];
    setItems(
      update(Items, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImage],
        ],
      })
    );
  };

  return (
    <>
      <div className={styles.border}>
        {/* Dropzone */}
        <DndProvider backend={backendForDND} key={Math.random()}>
          <TodoList
            todos={Items || []}
            moveTodo={moveTodo}
            doneTodo={doneTodo}
            deleteTodo={deleteTodo}
            addTodo={addTodo}
          />
        </DndProvider>
      </div>

      <div>
        <p className={styles.counts}>
          <span className={styles.active}>Active:{todo.active} </span>
          <span className={styles.done}>Done:{todo.done}</span>
        </p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  localStorage.setItem("todos", JSON.stringify(state.todo));
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    doneTodo: (todo) => dispatch(doneTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    changeOrder: (todo) => dispatch(changeOrder(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
