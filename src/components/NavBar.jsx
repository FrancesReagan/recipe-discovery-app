// navigation with search//


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function NavBar() {
  // state for the search input//
  const [searchQuery, setSearchQuerty] = useState("");
  // hook to navigate to different pages//
  const navigate =useNavigate();

  // handle search form submission//
  const handleSearch = (e) => {
    // prevent page refresh//
    e.preventDefault(); 
    // only search if user types something//
    if (setSearchQuerty.trim()) {
      // go to searc page with the query//
      navigate(`/search?query=${searchQuery.trim()}`);
      // clear search box//
      setSearchQuerty(""); 
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
          {/* logo/home link */}
          <Link to="/" className="text-xl font-bold">
          🍳 Discover Recipes
          </Link>

          {/* search form */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
            <input 
              type="text"
              placeholder="Search for recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuerty(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-gray-900"
              />
          </form>

        {/* navigation links */}
        <div className="flex space-x-4">
         
             <Link to="/" className="hover:text-blue-200">
              Home
             </Link>

            <Link to="/favorites" className="hover:text-blue-200">
            ❤️ Favorites
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;