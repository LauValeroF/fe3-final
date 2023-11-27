// Home.jsx
import React, { useEffect } from "react";
import { useAppContext } from "../AppContext";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

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
    <div>
      <h2>Listado de Dentistas</h2>
      <div className="dentist-grid">
        {state.dentists.map((dentist) => (
          <div key={dentist.id} className="dentist-card">
            <Link to={`/dentist/${dentist.id}`}>
              <Card name={dentist.name} username={dentist.username} id={dentist.id} />
            </Link>
            <button
              onClick={() => dispatch({ type: "ADD_FAVORITE", payload: dentist })}
              className="favButton"
            >
              ADD FAV
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
