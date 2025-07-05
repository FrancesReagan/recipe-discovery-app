// useFetch--hook that api calls with loading and error states//
// API calls with abort controllers//

import { useState, useEffect } from 'react';
 
function useFetch(url) {
  // state to store the data user gets from the API//
  const [data, setData] = useState(null);
  // state to track if we're still loading//
  const [loading, setLoading] = useState(true);
  // state to store any error messages//
  const [error, setError] = useState(null);
 
  // don't fetch if URL is not provided//
  useEffect(() => {
    if (!url) return; 
 
 
    const fetchData = async () => {
      try {
        // start loading//
        setLoading(true);
        // clear any previous errors//
        setError(null);

        // make API call//
        const response = await fetch(url);
        // check if response is successful//
        if(!response.ok){
          throw new Error("Failed to fetch data");
        }

        // convert response to JSON and save it//
        const result = await response.json();
        setData(result);
      } catch (error) {
        // if something goes wrong, save the error//
        setError(error.message);
      } finally {
        //always stop loading when done//
        setLoading(false);
      }
      };
 
    fetchData();
    // run this effect when URL changes//
    },[url]);
 
    
  // return the data, loading state, and any errors//
  return { data, loading, error };
}
 
export default useFetch;
