import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./utils/AppContext";
import logo from "../images/DH.ico"

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  const handleToggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={state.theme === "dark" ? "dark" : "light"}>
      <div>
        <img src={logo}/>
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/favs">Favoritos</Link>
      </div>
      <div>
        <button className="navButton" onClick={handleToggleTheme}>Cambiar tema</button>
      </div>
    </nav>
  );
};

export default Navbar;
