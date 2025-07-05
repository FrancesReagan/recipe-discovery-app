// recipe display card//
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function RecipeCard ({ recipe }) {
  // get favorites functions from context//
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites(); 
  // see if recipe is currently a favorite//
  const favorited = isFavorite(recipe.idMeal);

  const handleFavoriteClick = (e) => {
    // prevent navigation when clicking the heart//
    e.preventDefault();
    // prevent event bubbling//
    e.stopPropagation();

      if (favorited) {
        removeFromFavorites(recipe.idMeal);
      } else {
        addToFavorites(recipe);
      }
    };

return (

  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
    {/* link to recipe detail page*/}
     <Link to={`/recipe/${recipe.idMeal}`}>

       <div className="relative">  
          {/* recipe image */}
         <img 
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover" 
        />
  
      {/* favorite button over image */}
      <button
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100"
      >
       {favorited ? "❤️" : "🤍"}
     </button>
   </div>
  {/* recipe information section goes here */}
   <div className="p-4">
     <h3 className="font-semibold text-lg mb-2">{recipe.strMeal}</h3>
     {recipe.strArea && (
      <p className="text-gray-600 text-sm">📍 {recipe.strArea}</p>
    )}
   </div>
  </Link>
 </div>
 );
};

export default RecipeCard;