import axios from "axios";
import Proptypes from "prop-types";

export default function TodoForm({ setIsUpdated }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/todos`, {
      task: e.target[0].value,
    });

    e.target[0].value = "";
    setIsUpdated(true);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" />
      <button type="submit">Ajouter</button>
    </form>
  );
}

TodoForm.propTypes = {
  setIsUpdated: Proptypes.func.isRequired,
};
