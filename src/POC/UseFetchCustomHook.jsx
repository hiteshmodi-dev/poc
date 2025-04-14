import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    // fetchData();
    const cacheData = localStorage.getItem(url);
    if (cacheData) {
      setData(JSON.parse(cacheData));
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, [url]);

  useEffect(() => {
    if (data) {
      localStorage.setItem(url, JSON.stringify(data));
    }
  }, [data, url]);

  return [data, isLoading];
};

export default useFetch;