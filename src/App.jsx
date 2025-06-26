
// main app with routing//

import { Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import NavBar from "./components/NavBar";
import FavoritesPage from './pages/FavoritesPage';
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "pages/RecipeDetailPage";
import SearchPage from "./pages/SearchPage";
import './App.css'

function App() {
  
  return (
    
<FavoritesProvider>
  <div className="min-h-screen bg-gray-50">
    
    <NavBar />

    <main className="container mx-auto px-4 py-8">   

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
         <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

    </main>
</FavoritesProvider>
  </div>
  
  );
}

export default App;
