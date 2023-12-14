import axios from "axios";
import Proptypes from "prop-types";

export default function TodoList({ todos, setIsUpdated }) {
  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/todos/${id}`)
      .then(() => setIsUpdated(true));
  };

  return (
    <>
      <h1>TodoList</h1>
      <ul>
        {todos.map((t) => (
          <div key={t.id}>
            <li>{t.task}</li>
            <button type="button" onClick={() => handleDelete(t.id)}>
              Supprimer
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  todos: Proptypes.arrayOf(Proptypes.shape).isRequired,
  setIsUpdated: Proptypes.func.isRequired,
};
