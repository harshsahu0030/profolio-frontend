import { useState, useCallback } from "react";
import axios from "axios";

const config = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

export default function useApiCall() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let server = "https://profolio-backend-zeta.vercel.app";

  const callApi = useCallback(async (url, method, form) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios({
        url: `${server}/api/v1/contact`,
        method: method,
        data: form,
        ...config,
      });

      setData(data);
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, callApi };
}
