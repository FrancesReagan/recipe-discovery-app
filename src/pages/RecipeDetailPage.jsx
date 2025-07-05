// src/pages/RecipeDetailPage.jsx
// routing here --recipe detail page with ingredients and instructions//

import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useFavorites } from "../context/FavoritesContext";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function RecipeDetailPage() {
  // get recipe Id from URL//
  const { recipeId } = useParams();
  // get favorites functions//
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  // fetch full recipe details//
  const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );

  // show loading and error states//
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  // get the recipe form the API response//
  const recipe = data?.meals.[0];
    if (!recipe) return <ErrorMessage message={"Recipe not found"} />;

  // check if recipe is favorited//
  const favorited = isFavorite(recipe.idMeal);

  // extract ingredients from the API response//
  // the MealDB stores ingredients as strIngredient1, strIngredient2, etc.//
  const ingredients = [];
   for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    // only add if the ingredient exists and is not empty//
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : ""
      });
    }
   }

  //  handle favorite button click//
   const handleFavoriteClick = () => {
    if (favorited) {
      removeFromFavorites(recipe.idMeal);
    } else {
      addToFavorites(recipe);
    }
   };

   return (
    <div className="max-w-4xl mx-auto p-4">
      {/* two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* left column - image and favorite button */}
      <div>
        <img 
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full rounded-lg shadow-lg mb-4"
          />
          {/* favorites button */}
          <button 
            onClick={handleFavoriteToggle}
            className={`w-full py=3 px-6 rounded-lg font-semibold 
              ${favorited ? 
             "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
           >
              {favorited ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}

          </button>
       </div>

       {/* right column - recipe details */}
       <div>
        {/* recipe title */}
        
       </div>
      </div>
    </div>
   )





}


