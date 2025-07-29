import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonType = (id) => {

  const [typeInfo, setTypeInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTypeInfo = async () => {
    try {
        setLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
        setTypeInfo(response.data);
    } catch (error) {
        setError(true);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    fetchTypeInfo();
  }, [id]);

  return { typeInfo, loading, error };
};
