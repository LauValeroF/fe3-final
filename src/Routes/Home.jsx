import React, { useEffect } from "react";
import { useAppContext } from "../Components/utils/AppContext";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    // Aquí realizar la llamada a la API y actualizar el contexto
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch({ type: "SET_DENTISTS", payload: data });
      } catch (error) {
        console.error("Error fetching dentists:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <main className={`content ${state.theme}`} >
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentists.map((dentist) => (
          <div key={dentist.id} className="dentist-card">
            <Link to={`/dentist/${dentist.id}`}>
              <Card name={dentist.name} username={dentist.username} id={dentist.id} />
            </Link>

          </div>
        ))}
      </div>
    </main>
  )
}

export default Home