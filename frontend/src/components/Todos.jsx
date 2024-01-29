import { useState } from 'react';
import './Todos.css';

export function Todos({ todos }) {
  const updateTodos = async (id) => {
    await fetch("http://localhost:3001/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(async (data) => {
      const res = await data.json();
    });
  };

  return (
    <div className='parentDivTodos'>
      {todos.map((element) => (
        <div className='todoDiv' key={element._id}>
          <h1 className='heading'>{element.title}</h1>
          <p className='description'>{element.description}</p>
          <button className='button' onClick={() => updateTodos(element._id)}>
            {element.completed ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}
