import React, { useState } from "react";
import { BiFolderPlus } from "react-icons/bi";
import { getId } from "../utils";
import styles from "../styles/miniatures.module.css";

const TodoForm = ({ addTodo }) => {
  const [showForm, setshowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value.trim();
    // validate empty string
    if (text.length) {
      addTodo({
        text,
        done: false,
        id: getId(),
      });
    }
    // clear text area
    e.target[0].value = "";
  };

  return (
    <div className={styles.cardsform}>
      {showForm ? (
        <form className={styles.divContainer} onSubmit={(e) => handleSubmit(e)}>
          <textarea className={styles.input} />
          <button className={styles.btnAdd}>Add</button>
        </form>
      ) : (
        <div className={styles.divContainer} onClick={() => setshowForm(true)}>
          <BiFolderPlus size={80} />
          <p>Add New Item!</p>
        </div>
      )}
    </div>
  );
};

export default TodoForm;
