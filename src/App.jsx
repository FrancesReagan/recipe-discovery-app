// src/App.jsx//
// main app component that sets up the routing//

import { Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import NavBar from "./components/NavBar";
import FavoritesPage from './pages/FavoritesPage';
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import './App.css'

function App() {
  
  return (
    // wrap entire app with favorites provider for global state//
    
   <FavoritesProvider>
     <div className="min-h-screen bg-gray-50">
      {/* navigation bar at the top */}
      <NavBar />

      {/* main content area */}
       <main>
         {/* define all the routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
         <Route path="/favorites" element={<FavoritesPage />} />
         <Route path="/search" element={<SearchResultsPage />} />
       </Routes>
      </main>
     </div>
   </FavoritesProvider>
  );
}

export default App;
