// src/pages/SearchResultsPage.jsx//
// page showing search results//

import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";


function SearchResultPage() {
// get search query from URL parameters//
const [searchParams] = useSearchParams();
const query = searchParams.get("query");

// fetch search results from API//
const { data, loading, error } = useFetch(
  query ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}` : null
);

// show loading and error states//
if (loading) return <Spinner/>;
if (error) return <ErrorMessage message={error} />;

// if no query provide, show message//
if (!query) {
  return(
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Search Recipes</h1>
          <p className="text-xl text-gray-600 mb-4">No search query provided</p>
          <p className="text-lg text-gray-500">Please use the search box above to find delicious recipes</p>
        </div>
      </div>
    </div>
  );
}

// get recipes from API response (could be null if no results)//
const recipes = data?.meals || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12"> 
    <div className="max-w-7xl mx-auto px-8">
      {/* page title with search term */}
      <div className="text-center mb-16">
      <h1 className="text-6xl font-bold text-gray-900 mb-8">
        Search Results for "{query}"
      </h1>
      <p className="text-2xl text-gray-600">
        Found {recipes.length} recipe{recipes.length !== 1 ? 's' : ''}
      </p>
    </div>
      {/* show message if no recipes are found */}
      {recipes.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-8">🔍</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            No recipes found for "{query}"
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Try searching for something else delicious
          </p>
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Search suggestions</h3>
           <ul className="text-blue-800 space-y-2">
            <li>• Try different keywords (e.g., "pasta", "chicken", "beef"</li> 
            <li>• Check your spelling</li>
            <li>• Use more general terms</li>
            <li>• Browse categories from the home page</li>
           </ul>
        </div>
      </div>
    </div> 
      ) : (
        // show grid of recipe cards//
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
       </div>
      </div>
   );
  }

export default SearchResultPage;