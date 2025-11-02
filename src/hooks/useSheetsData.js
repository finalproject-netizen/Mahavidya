// src/hooks/useSheetData.js
import { useState, useEffect } from "react";

export const useSheetData = (fetchFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchFunc();
        setData(res);
      } catch (err) {
        console.error("Gagal memuat data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchFunc]);

  return { data, loading };
};
