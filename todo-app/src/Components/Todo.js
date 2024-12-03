import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({ todo, toggleComplete, handleDelete, handleEdit }) {
  console.log(todo);

  const [newTitle, setNewTitle] = useState(todo?.Subject || "");

  const handleChange = (e) => {
    e.preventDefault();
    if (todo?.completed === true) {
      setNewTitle(todo.Subject);
    } else {
      setNewTitle(e.target.value);
    }
  };

  if (!todo) {
    return <div>Tarefa não encontrada.</div>; 
  }

  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={newTitle}
        className="list"
        onChange={handleChange}
      />
      <div className="btn-container">
        <button className="button-complete" onClick={() => toggleComplete(todo)}>
          <CheckCircleIcon id="i" />
        </button>
        <button className="buttocn-edit" onClick={() => handleEdit(todo, newTitle)}>
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
