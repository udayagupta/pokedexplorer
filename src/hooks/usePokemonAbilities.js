import axios from "axios";
import { useState, useEffect } from "react";

export const usePokemonAbilities = (data) => {
  const [abilitiesData, setAbilitiesData] = useState([]);
  const [abilitiesLoading, setAbilitiesLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAbilitiesData = async () => {
    try {
      setAbilitiesLoading(true);

      const promises = await Promise.all(
        data.map(async (item) => {
          
          const response = await axios.get(item.ability.url);
          return {
            data: response.data,
            is_hidden: item.is_hidden,
            slot: item.slot
          };
        })
      );

      setAbilitiesData(promises);
    } catch (error) {
      setError(error.message);
    } finally {
      setAbilitiesLoading(false);
    }
  };

  useEffect(() => {
    fetchAbilitiesData();
  }, [data]);

  return { abilitiesData, abilitiesLoading, error };
};

