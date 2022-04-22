import React from "react";
import styles from "../styles/miniatures.module.css";
import Menu from "./Menu";

const Miniatures = ({ todo, doneTodo, deleteTodo }) => {
  //handle Delete
  const deleteItem = () => {
    deleteTodo(todo);
  };
  //handle Mark as Done
  const done = () => {
    doneTodo(todo);
  };

  const options = () => {
    return [
      {
        name: "Mark As Done",
        action: done,
      },
      {
        name: "Delete",
        action: deleteItem,
      },
    ];
  };

  return (
    <div className={styles.cards}>
      <div className={styles.option}>
        <Menu options={options()} />
      </div>
      <p className={styles.text}>{todo.text}</p>
    </div>
  );
};

export default Miniatures;
