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
      < className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
       <>
        
        {/* recipe title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {recipe.strMeal}
        </h1>

      {/* recipe tags */}
      <div className="mb-6">
        {recipe.strArea && (
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2">
            📍{recipe.strArea}
          </span>
        )}
        {recipe.strCategory && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            🏷️ {recipe.strCategory}
          </span>
        )}
      </div>
        {/* ingredients list */}
        <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
        <ul className="space-y-2">
          {ingredients.map((item,index) => (
            <li key={index} className="flex">
              {/* measurements and ingredients */}
              <span className="w-20 text-gray-600">{item.measure}</span>
              <span>{item.ingredient}</span>
            </li>
          ))}
        </ul>
      </div>
     {/* instructions */}
     <div>
      <h2 className="text-xl font-semibold mb-3">Instructions</h2>
      <p className="text-gray-700 leading-relaxed">{recipe.strInstructions}</p>
       </div>
      </div>
    </div>
    </div>
   );
  }0];

   if(!recipe) return <ErrorMessage messsage="Recipe not found"/>;
    const favorited = isFavorite(recipe.idMeal);

    // get ingredients from the API response//
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      if(ingredient && ingredient.trim()){
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure ? measure.trim():""
        });
      }
    }

    const handleFavoriteToggle = () => {
      if (favorited) {
        removeFromFavorites(recipe.idMeal);
      } else {
        addToFavorites(recipe);
      }
    };
    
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
             src={recipe.strMealThumb}
             alt={recipe.strMeal}
             className="w-full rounded-lg shadow-lg mb-4"
             />
          </div>
        </div>
      </div>
    )





}


