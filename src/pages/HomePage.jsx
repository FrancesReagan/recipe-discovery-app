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


</div>

  );
}

export default CategoryPage;
