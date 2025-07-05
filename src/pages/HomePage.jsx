// src/pages/HomePage.jsx
// home page (/) will display all recipe categories//

import {Link} from "react-rounter-dom";
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

<div className="max-w-6xl mx-auto p-4">
  {/* page header */}
  <div className="text-center mb-8">
     <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Amazing Recipes
     </h1>
   <p className="text-gray-600">
        Browse through different categories and find your next favorite meal.
    </p>
  </div>
  
{/* categories grid */}
<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
{data?.categories?Map((category) => (

<Link
key={category.idCategory}
to={`/category/${category.strCategory}`}
className="block bg-white rounded shadow p-4">

  <img
  src={category.strCategoryThumb}
  alt={category.strCategory}
  className="w-full h-48 object-cover rounded mb-3" />
  <h2 className="text-xl font-semibold mb-2">
    {category.strCategory}
  </h2>
  <p className="text-gray-600 text-sm">
    {category.strCategorDescription}
  </p>
</Link>

))}

</div>

</div>

  );
};

export default HomePage;
