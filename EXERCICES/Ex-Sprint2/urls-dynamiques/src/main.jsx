import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blog from "./pages/Blog";
import Article from "./pages/Article";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: "/articles/:id",
    element: <Article />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
