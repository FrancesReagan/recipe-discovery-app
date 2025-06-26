// useFetch--hook that api calls with loading and error states//
// API calls with abort controllers//

import { useState, useEffect } from 'react';
 
function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  // don't fetch if URL is not provided//
  useEffect(() => {
    if (!url) return; 
 
    // for cleanup when unmounts//
    const controller = new AbortController(); 
    setData(null); 
    // reset error on new fetch//
    setError(null); 
    setLoading(true);
 
    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        // don't set error if aborted//
        if (err.name !== 'AbortError') { 
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
 
    fetchData();
 
    // Cleanup function
    return () => {
      controller.abort();
    };
    // re-run if url or options change//
  }, [url, options]); 
 
  return { data, loading, error };
}
 
export default useFetch;
