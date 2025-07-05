// src/pages/FavoritesPage.jsx//
//page showing all saved favorite receipes//

import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

function FavoritesPage() {
  // get favorites from context//
  const { favorites } = useFavorites();

  // show message if no favorites are saved yet//
  if (favorites.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-4 text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Favorites</h1>
        <p className="text-gray-600 mb-8">You have not saved your recipes yet</p>
        <p className="text-gray-500">Browse recipes and click the heart to save them to Favorites</p>
      </div>
    );
  }

  return (
    


  );
}

export default FavoritesPage;