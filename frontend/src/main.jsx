import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import TodoPage from "./pages/TodoPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/todos",
        element: <TodoPage />,
        loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/api/todos`),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
