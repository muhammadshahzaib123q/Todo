import DeleteIcon from "../assets/deleteicon.png";
import checkicon from "../assets/checkicon.png"
import "./todo.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TodoItem = ({ title, deleteTodo }) => {
  const [check, setcheck] = useState(false);
const markCompleted = () => {
  setcheck(!check);
};
  
  return (
    <div className="todo-item" id="todo-1" style={{backgroundColor: check ? "#af7eeb" : "white"}}>
    <p className="todo-task-title">{title}</p> 
    <img className="check-icon" src={checkicon} onClick={markCompleted} />
    <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
  );
};
