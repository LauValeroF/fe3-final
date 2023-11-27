import { createContext, useReducer, useContext } from "react";

const AppContext = createContext();

const initialState = {
  dentists: [], 
  theme: "light", 
  favoriteDentists: [], 
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "ADD_TO_FAVORITES":
        const newFavoriteDentists = [...state.favoriteDentists, action.payload];
        localStorage.setItem("favoriteDentists", JSON.stringify(newFavoriteDentists));
        return { ...state, favoriteDentists: newFavoriteDentists };
  
    case "REMOVE_FROM_FAVORITES":
        const updatedFavorites = state.favoriteDentists.filter(
          (dentist) => dentist.id !== action.payload
        );
        localStorage.setItem("favoriteDentists", JSON.stringify(updatedFavorites));
        return { ...state, favoriteDentists: updatedFavorites };
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
