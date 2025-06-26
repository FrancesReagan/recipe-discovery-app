// Categories grid//
// routing HomePage//
// home page (/) will display all recipe categories//





import {Link} from "react-rounter-dom";
import {useFetch} from "../hooks/useFetch";
import Spinnger  from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

// fetch categories from API here----have error handling here//
// have categories grid here and key category id here//

function HomePage() => {
  // fetch all catergories from the API//
  const { data, loading, error } =
  useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  // not sure will use the spinner after all--may remove this component//
   if (loading) return <Spinner />;
   if (error) return <ErrorMessage message={error}/>;
}

  return (

<div>


<h1 className="text-3xl font-bold text-center mb-4">
  Discover Amazing Recipes
</h1>
<p className="text-center text-gray-600 mb-8">
  Browse through different categories and find your next favorite meal.
</p>
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
