import React from "react";
import styles from "../styles/todoList.module.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, moveTodo, doneTodo, deleteTodo, addTodo }) => {
  const renderTodo = (todo, index) => (
    <Todo
      todo={todo}
      index={index}
      key={todo.id}
      doneTodo={doneTodo}
      deleteTodo={deleteTodo}
      moveTodo={moveTodo}
    />
  );

  return (
    <section className={styles.fileList}>
      <div style={{ marginTop: "40px" }}>
        <TodoForm addTodo={addTodo} />
      </div>
      {todos.map(renderTodo)}
    </section>
  );
};

export default TodoList;
