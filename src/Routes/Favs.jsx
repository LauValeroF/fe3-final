import React from "react";
import Card from "../Components/Card";
import { useAppContext } from "../Components/utils/AppContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useAppContext();

  return (
    <main className={`content ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favoriteDentists.length > 0 ? (
        state.favoriteDentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))
      ) : (
        <p>No hay dentistas destacados.</p>
      )}
      </div>
    </main>
  );
};

export default Favs;
