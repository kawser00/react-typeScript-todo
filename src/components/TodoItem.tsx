import React from "react";

interface IProps {
  item: string;
  index: number;
  deleteItem: (id: number) => void;
}

const TodoItem = ({ item, index, deleteItem }: IProps) => {
  return (
    <div className="eachItem">
      <h3>{item}</h3>
      <i
        className="far fa-trash-alt"
        title="delete Item"
        onClick={() => deleteItem(index)}
      />
    </div>
  );
};

export default TodoItem;
