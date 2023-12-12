import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (options.url) {
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [options]); // [options.url] *const { data } = useFetch({ url })

  return {
    data,
  };
};
