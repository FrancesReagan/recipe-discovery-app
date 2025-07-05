// src/pages/CategoryPage.jsx
// Category page will have routing ---page showing all recipes in a specific category//

import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";


function CategoryPage() {
  // get the category name from the URL//
  const { categoryName } = useParams();

  // fetch recipes for this specific category//
  const { data, loading, error } = useFetch(
   `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}` 
  );

  // show loading and error states//
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error}/>;


  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* pagee title showing the category */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {categoryName} Recipes
      </h1>
    {/* grid of recipe cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.meals?.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe}/>
      ))}
    </div>
  </div>
 );
}

export default CategoryPage;

