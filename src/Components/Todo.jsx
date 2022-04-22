import React, { useRef } from "react";
import Miniatures from "./Miniatures";
import { useDrag, useDrop } from "react-dnd";

const type = "piece";

const Todo = ({ todo, index, doneTodo, deleteTodo, moveTodo }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: type,
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Move the content
      moveTodo(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // initialize drag and drop into the element
  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0 : 1, marginTop: "40px" }}>
      <Miniatures
        todo={todo}
        index={index}
        doneTodo={doneTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default Todo;
