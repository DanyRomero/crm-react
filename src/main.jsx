import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NewClient from "./pages/NewClient";
import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, //esto significa que en el path / se renderiza el layout más el element asignado 
        element: <Index /> // elemento que se renderiza en el outlet
      },
      {
        path: "/clientes/nuevo",
        element: <NewClient />,// elemento que se renderiza en el outlet
      },
      {
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
