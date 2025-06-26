// navigation with search//


import { use, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


function NavBar() {
  const [searchQuery, setSearchQuerty] = useState("");
  const navigate =useNavigate();

  // handle search form submission//
  const handleSearch = (e) => {
    // prevent page refresh//
    e.preventDefault(); 
    if (setSearchQuerty.trim()) {
      // navigate to search page with query//
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      // clear search box//
      setSearchQuerty(""); 
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

          {/* logo */}
          <NavLink to="/" className="text-2xl font-bold">
          🍳 Discover Recipes
          </NavLink>

          {/* search bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
            <input 
              type="text"
              placeholder="Search for recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuerty(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-gray-900"/>
          </form>

        {/* navigation links */}
        <ul className="flex space-x-6">
          <li>
             <NavLink to="/">
               Home

             </NavLink>
              </li>
          <li>
            <NavLink to="/farvorites">
            ❤️ Favorites
            </NavLink>
          </li>
        </ul>
        </div>
        </div>

    </nav>
  );

}

 

export default NavBar;