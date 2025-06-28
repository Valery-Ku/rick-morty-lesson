import { fetchLocations } from "../../../api";
import { useState, useEffect } from "react";

export const useLocations = (ids) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!ids || ids.length === 0) {
      fetch("https://rickandmortyapi.com/api/location")
        .then((res) => res.json())
        .then((data) => {
          setLocations(data.results || []);
          setIsLoading(false);
        });
    } else {
      fetchLocations(ids).then((data) => {
        if (Array.isArray(data)) {
          setLocations(data);
        } else if (data) {
          setLocations([data]);
        } else {
          setLocations([]);
        }
        setIsLoading(false);
      });
    }
  }, [ids]);

  return { locations, isLoading };
};
