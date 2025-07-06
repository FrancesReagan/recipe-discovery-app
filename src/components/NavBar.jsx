// navigation with search//


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function NavBar() {
  // state for the search input//
  const [searchQuery, setSearchQuery] = useState("");
  // hook to navigate to different pages//
  const navigate =useNavigate();

  // handle search form submission//
  const handleSearch = (e) => {
    // prevent page refresh//
    e.preventDefault(); 
    // only search if user types something//
    if (searchQuery.trim()) {
      // go to searc page with the query//
      navigate(`/search?query=${searchQuery.trim()}`);
      // clear search box//
      setSearchQuery(""); 
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
          {/* logo/home link */}
          <Link to="/" className="text-3xl font-bold hover:text-blue-200 transition-colors">
          🍳 Discover Recipes
          </Link>

          {/* search form */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-12">
            <input 
              type="text"
              placeholder="Search for recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
          </form>

        {/* navigation links */}
        <div className="flex space-x-8">
         
             <Link to="/" className="text-xl font-semibold hover:text-blue-200 transition-colors">
              Home
             </Link>

            <Link to="/favorites" className="text-xl font-semibold hover:text-blue-200 transition-colors">
            ❤️ Favorites
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;