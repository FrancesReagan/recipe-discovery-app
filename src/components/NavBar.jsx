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
    <nav className="bg-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
        
          {/* logo/home link */}
          <div className="flex-shrink-0">
          <Link to="/" className="text-4xl font-bold hover:text-blue-200 transition-colors">
          🍳 Discover Recipes
          </Link>
       </div>

          {/* search form with white bg*/}
          <div className="flex-1 max-w-2xl mx-12">
          <form onSubmit={handleSearch} className="w-full">
            <input 
              type="text"
              placeholder="Search for recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-8 py-6 text-2xl rounded-xl text-gray-900 bg-white border-0 focus:outline-none focus:ring-4 focus:ring-white 
                         focus:ring-opacity-50 shadow-lg placeholder-gray-500"
              />
          </form>
         </div>     
        {/* navigation links */}
        <div className="flex-shrink-0">
          <div className="flex space-x-8">
         
             <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors px-4 py-2">
              Home
             </Link>

            <Link to="/favorites" className="text-2xl font-bold hover:text-blue-200 transition-colors px-4 py-2">
            ❤️ Favorites
            </Link>
        </div>
       </div>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;