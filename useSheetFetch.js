import React, { useEffect, useState } from 'react';

export function useFetchSheet(sheetId, apiKey, range) {
  const URL = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = () => {
    try {
      setLoading(true);
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setData(data.values));
      setLoading(false);
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data };
}
