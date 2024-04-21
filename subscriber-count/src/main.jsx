import "./index.css";
import React from "react";
import App from "./App.jsx";
import ErrorPage from "./error-page";
import Home from "./components/Home";
import ReactDOM from "react-dom/client";
import Search from "./components/Search";
import ViewCount from "./components/Views";
import SubscriberCount from "./components/Subscribers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "subscribers",
        element: <SubscriberCount />,
      },
      {
        path: "views",
        element: <ViewCount />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
