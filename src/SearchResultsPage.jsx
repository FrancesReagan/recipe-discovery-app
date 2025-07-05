// src/pages/SearchResultsPage.jsx//
// page showing search results//

import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";


function SearchResultsPage() {
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

// get recipes from API response (could be null if no results)//
const recipes = data?.meals || [];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* page title with search term */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Search Results for "{query}"
      </h1>
      {/* show message if no recipes are found */}
      {recipes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No recipes found for "{query}"</p>
          <p className="text-gray-500">Try searching for something else delicious</p>
    </div>
      ) : (
        // show grid of recipe cards//
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
      </div>
   );
  }

export default SearchResultsPage;