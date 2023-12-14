import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

export default function TodoPage() {
  const todos = useLoaderData();

  const [isUpdated, setIsUpdated] = useState(false);
  const [updatedTodos, setUpdatedTodos] = useState(todos);

  useEffect(() => {
    if (isUpdated) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/todos`)
        .then((res) => {
          setUpdatedTodos(res.data);
          setIsUpdated(false);
        })
        .catch((e) => console.error(e));
    }
  }, [isUpdated]);

  return (
    <>
      <h1>Todo page</h1>
      <TodoList todos={updatedTodos} setIsUpdated={setIsUpdated} />
      <TodoForm setIsUpdated={setIsUpdated} />
    </>
  );
}
