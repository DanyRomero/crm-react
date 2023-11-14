import { useLoaderData } from "react-router-dom";
import { getClient } from "../data/clientes";

export async function loader({ params }) {
  const client = await getClient(params.id);
  if (Object.values(client).length === 0) {
    throw new Response("", { status: 404, statusText: "No hay resultados" });
  }
  return client;
}

const EditClient = () => {
  const client = useLoaderData();

  return <div>{client.nombre}</div>;
};

export default EditClient;
