// src/pages/SearchResultPage.jsx//
// page showing search results//

import { useSearchParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import RecipeCard from "./components/RecipeCard";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";


function SearchResultPage() {
// get search query from URL parameters//
const [searchParams] = useSearchParams();
const query = searchParams.get("query");


  return (
<>
<h1>Search Result Page</h1>
</>

  );
}

export default SearchResultPage;