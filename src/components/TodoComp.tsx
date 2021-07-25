import React, { useEffect, useState } from "react";
import todo from "../images/todo.svg";
import TodoItem from "./TodoItem";

let getLocalItems: () => string[];

// get items from local storage
getLocalItems = () => {
  const lists = localStorage.getItem("todoList");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const TodoComp = () => {
  const [inputData, setInputData] = useState<string>("");
  const [items, setItems] = useState<string[]>(getLocalItems());

  //get data from input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  //set input data in an array
  const addItem = () => {
    if (inputData) {
      setItems([...items, inputData]);
      setInputData("");
    } else {
      alert("Don't be crazy! Input an item.");
    }
  };

  //delete an item from todo lists
  const deleteItem = (id: number) => {
    const updatedItems = items.filter((item, ind) => ind !== id);
    setItems(updatedItems);
  };

  //remove all items from todo lists
  const removeAll = () => {
    setItems([]);
  };

  //setItems in local storage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(items));
  }, [items]);

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src={todo} alt="" />
          <figcaption>Add Your List Here 📙</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="✍ Add Items..."
            value={inputData}
            onChange={handleInputChange}
          />
          <i
            className="fa fa-plus add-btn"
            title="Add Item"
            onClick={addItem}
          />
        </div>
        <div className="showItems">
          {items.map((item, ind) => (
            <TodoItem
              item={item}
              deleteItem={deleteItem}
              key={ind}
              index={ind}
            />
          ))}
        </div>
        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="Remove All"
            onClick={removeAll}
          >
            <span> CHECK LIST </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoComp;
