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

 <div className="min-h-screen bg-gray-50">
  {/* page header */}
  <div className="bg-white shadow-sm">
  <div className="w-full py-24">
  <div className="text-center px-8">
    {/* title */}
     <h1 className="text-8xl font-black text-gray-900 mb-10 text-center">
            Discover Amazing Recipes
     </h1>
     {/* subtitle */}
   <p className="text-4xl text-gray-600 text-center leading-relaxed max-w-6xl mx-auto">
        Browse through different categories and find your next favorite meal.
    </p>
  </div>
 </div>
</div>

{/* cards section -- centered */}
<div className="w-full py-20">
  <div className="max-w-7xl mx-auto px-8">

{/* grid of category cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
 {data?.categories?.map((category) => (
    <Link
      key={category.idCategory}
      to={`/category/${category.strCategory}`}
      className="group w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
    >
      {/* category image */}
      <div className="relative overflow-hidden">
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
       />
      </div> 
      {/* category information */}
      <div className="p-8">
       <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors text-center">
        {category.strCategory}
      </h2>
       <p className="text-xl text-gray-600 leading-relaxed line-clamp-4 mb-8 text-center">
        {category.strCategoryDescription}
        </p>
        {/* explore arrow */}
        <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700">
          <span className="text-xl font-bold">Explore recipes</span>
          <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
   ))}
  </div>
 </div>
 </div>
 </div>
 );
}

export default HomePage;
