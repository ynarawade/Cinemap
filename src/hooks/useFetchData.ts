import { useEffect, useState } from "react";
import { API_OPTIONS, BASE_API_URL } from "../constants";

export default function useFetchData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchData() {
    setLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${BASE_API_URL}/${url}`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (!data.results) {
        setErrorMessage("No data found");
        return;
      }

      console.log(data);

      setData(data.results || []);
    } catch (error) {
      console.error(`Error fetching data`, error);
      setErrorMessage("Error fetching data,Please try again later!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, errorMessage };
}
