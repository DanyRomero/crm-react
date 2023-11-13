import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NewClient, {action as newClientAction} from "./pages/NewClient";
import Index, {loader as clientsLoader} from "./pages/Index";
import ErrroPage from "./components/ErrroPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, //esto significa que en el path / se renderiza el layout más el element asignado 
        element: <Index />, // elemento que se renderiza en el outlet
        loader: clientsLoader, //como un useEffect
        errorElement:<ErrroPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NewClient />,// elemento que se renderiza en el outlet
        action: newClientAction,//como onSubmit
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
