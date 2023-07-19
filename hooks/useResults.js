import { useEffect, useState } from "react";

export default () => {
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    const api = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=960e8bb9&app_key=fd7a1eb6dff8cdb58eef4f79f1d83d97`
    );
    const data = await api.json();
    setResults(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    searchApi("mango");
  }, []);

  return [searchApi, results];
};
