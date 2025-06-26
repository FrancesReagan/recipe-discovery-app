// recipe display card//
import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoriteContext";

const RecipeCard = ({ recipe }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites(); 
  const isRecipeFavorited = isFavorite(recipe.idMeal);

  const handleFavoriteClick = (e) => {
    // prevent navigation when clicking the heart//
    e.preventDefault();

    if(isRecipeFavorited) {
      removeFromFavorites(recipe.idMeal);    }
  } else {
    addToFavorites(recipe.idMeal);
  }
};

return (
  <div className="bg-white rounded shadow p-4">
    {/* favorite button */}
    <button
    onClick={handleFavoriteClick}
    className-"float-right p-1 bg-gray-100 rounded">
    <span className={isRecipeFavorited ? "text-red-500"; "text-gray-400"}>
    {isRecipeFavorited ? "❤️" : "🤍"}
    </span>
    </button>

 <Link t0={`/recipe/${recipe.idMeal}`}>
  <img 
    src={recipe.strMealThumb}
    alt={recipe.strMeal}
    className="w-full h-48 object-cover rounded mb-3" />
    <h3 className="text-lg font-semibold text-gray-800">
      {recipe.strMeal}
    </h3>

    {recipe.strArea && (
      <p className="text-sm text-gray-500 mt-1">
        📍{recipe.strArea}
      </p>
    )}
 </Link>
  </div>
);
};

export default RecipeCard;