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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-8">
      {/* page title showing the category */}
      {/* page title centered */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">
          {categoryName} Recipes
        </h1>
          {/* bigger subtitle */}
         <p className="text-2xl text-gray-600">
            Discover delicious {categoryName.toLowerCase()} recipes
         </p>
       </div>
    {/* grid of recipe cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
      {data?.meals?.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe}/>
      ))}
    </div>
  </div>
  </div>
);
}

export default CategoryPage;

