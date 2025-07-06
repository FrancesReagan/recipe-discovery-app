// src/pages/HomePage.jsx
// home page (/) will display all recipe categories//

import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner  from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

// fetch categories from API here----have error handling here//
// have categories grid here and key category id here//

function HomePage() {
  // fetch all catergories from the MealDB API//
  const { data, loading, error } = useFetch(
     "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
  // not sure will use the spinner after all--may remove this component//
  // show spinner animation while loading//
   if (loading) return <Spinner />;
  //  so error if something goes wrong//
   if (error) return <ErrorMessage message={error}/>;

  return (

<div className="max-w-7xl mx-auto p-6">
  {/* page header */}
  <div className="text-center mb-12">
    {/* title */}
     <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Amazing Recipes
     </h1>
     {/* subtitle */}
   <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Browse through different categories and find your next favorite meal.
    </p>
  </div>

{/* grid of category cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
 {data?.categories?.map((category) => (
    <Link
      key={category.idCategory}
      to={`/category/${category.strCategory}`}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* category image */}
      <div className="aspect-w-16 aspect-h-12 overflow-hidden">
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      </div> 
      {/* category information */}
      <div className="p-6">
       <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {category.strCategory}
      </h2>
       <p className="text-gray-600 text-base leading-relaxed line-clamp-4">
        {category.strCategoryDescription}
        </p>
        {/* explore arrow */}
        <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
          <span className="text-sm font-semibold">Explore recipes</span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
   ))}
  </div>
 </div>
 );
}

export default HomePage;
