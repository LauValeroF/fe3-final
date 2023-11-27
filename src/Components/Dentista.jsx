import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dentista = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error fetching dentist details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!dentist) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>Detalle del dentista</h2>
      <p>Nombre: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Teléfono: {dentist.phone}</p>
      <p>Sitio web: {dentist.website}</p>
    </div>
  );
};

export default Dentista;
