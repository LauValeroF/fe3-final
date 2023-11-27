import React, { useState } from "react";
import Form from "../Components/Form";
import { useAppContext } from "../Components/utils/AppContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { state } = useAppContext();

  const handleSubmitForm = (formData) => {
    // Realizar validaciones aquí
    if (formData.fullName.length <= 5 || !isValidEmail(formData.email)) {
      setError("Por favor, verifique su información nuevamente.");
      return;
    }

    console.log("Datos enviados:", formData);

    setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail.`);
  };

  const isValidEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={`content ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form onSubmit={handleSubmitForm} />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  )
}

export default Contact