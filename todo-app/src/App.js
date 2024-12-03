import React, { useState, useEffect } from 'react'; // Importando React e os hooks necessários
import Todo from './Components/Todo';
import './App.css';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from './Components/Firebase';
import TodoSubject from './Components/TodoSubject';
import Createtodo from './Components/Criar.js';

function App() {
  const [todos, setTodos] = useState([]); 

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, Subject) => {
    await updateDoc(doc(db, "todos", todo.id), { Subject: Subject });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="App">
      <TodoSubject/>
      <Createtodo />
      {todos.map((item) => (
        <Todo 
          key={item.id}
          todo={item}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default App;
