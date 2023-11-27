import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./utils/AppContext";
import ProfilePic from "../images/doctor.jpg"

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useAppContext();

  const isDentistInFavorites = state.favoriteDentists.some((dentist) => dentist.id === id);

  const addToFavorites = () => {
    if (!isDentistInFavorites) {
      dispatch({ type: "ADD_TO_FAVORITES", payload: { id, name, username } });
    }
  };

  const removeFromFavorites = () => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <p>{name}</p>
        <img src={ProfilePic} alt="profile pic"/>
        <p>{username}</p>
      </Link>
      <button onClick={addToFavorites} className="favButton" disabled={isDentistInFavorites}>
        {isDentistInFavorites ? "Ya en favoritos" : "Add fav"}
      </button>
      <button onClick={removeFromFavorites} className="favButton">
        Remove fav
      </button>
    </div>
  );
};

export default Card;
