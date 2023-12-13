import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const todos = useLoaderData();

  console.log(todos);

  return <h1>App</h1>;
}

export default App;
