
// global state for managing favorite recipes//

import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { UNSAFE_createBrowserHistory } from "react-router-dom";

   // create the context for sharing favorites data//
 const FavoritesContext = createContext();

  //  provider component that wraps the app/
  export const FavoritesProvider = ({ children }) => {
    // use localStorage to save favorites between browswer sessions//
    const [favorites, setFavorites] = useLocalStorage("recipe-favorites",[]);

    // function to add a recipe to favorites//
      const addToFavorites = (recipe) => {
      // check if the recipe is already in favorites//
      const isAlready = favorites.find(fav => fav.idMeal === recipe.idMeal);

      // only add if it's not already there//

        if (isAlready) {
          // add the recipe to the favorites array//
          setFavorites([...favorites,recipe]);
        }
    };

    // function to remove a recipe form favorites//
    const removeFromFavorites = (recipeId) => {
      // filter out the recipe with the matching Id that user wants to remove//
      setFavorites(favorites.filter(fav => fav.idMeal !== recipeId));
    };

    // function to check if a recipe is in favorites//
    const isFavorite = (recipeId) => {
      return favorites.some(fav => fav.idMeal === recipeId);
    };

    // the value object that will be shared with all components//
    const value = {
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    };

    // provide all the favorites functions to child components//
    return (
      <FavoritesContext.Provider value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}>
        {children}        
      </FavoritesContext.Provider>
    );
  }

// hook to use favorites in any component//
export function useFavorites() {
  const context = useContext(FavoritesContext);

  // make sure this hook is used inside the provider//
   if(!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
}
  return context;
}
