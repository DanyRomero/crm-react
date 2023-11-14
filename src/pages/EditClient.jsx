import { Form, useNavigate, useLoaderData } from "react-router-dom";
import { getClient } from "../data/clientes";
import Formulario from "../components/Formulario";

export async function loader({ params }) {
  const client = await getClient(params.id);
  if (Object.values(client).length === 0) {
    throw new Response("", { status: 404, statusText: "No hay resultados" });
  }
  return client;
}

const EditClient = () => {
  const client = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        A continuación podrás modificar los datos de un cliente
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-w3/4 mx-auto px-5 py-10 mt-20">
        {/* {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)} */}
        <Form method="post" noValidate>
          <Formulario client={client} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg text-center"
            value="Editar cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default EditClient;
