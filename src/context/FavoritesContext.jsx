
// global favorites state//
// global state  management for favorites//
// favoritescontext manages favorite recipes across the whole application---and
// provides functions to add, remove, and check favorite status//

import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

   // create the context - this is like a "channel" for sharing data//
 const FavoritesContext = createContext();

  //  provider component - this wraps the app and provides the favorites data//
  export const FavoritesProvider = ({ children }) => {
    // use custom hook to store favorites in localStorage//
    const [favorites, setFavorites] = useLocalStorage("recipe-favorites",[]);

    // function to add a recipe to favorites//
      const addToFavorites = (recipe) => {
      // check if the recipe is already in favorites//
      const isAlreadyFavorite = favorites.some(fav => fav.idMeal === recipe.idMeal);

        if (isAlreadyFavorite) {
          // add the recipe to the favorites array//
          setFavorites([...favorites,recipe]);
        }
    };

    // function to remove a recipe form favorites//
    const removeFromFavorites = (recipeId) => {
      // filter out the recipe with the matching Id//
      setFavorites(favorites.filter(fav => fav.idMeal !== recipeId));
    }


  } 
