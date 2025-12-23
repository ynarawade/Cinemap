import { useEffect, useState } from "react";
import { API_OPTIONS, BASE_API_URL } from "../constants";

export default function useInfiniteFetchData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  async function fetchData() {
    setLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${BASE_API_URL}/${url}&page=${page}`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (!data.results) {
        setErrorMessage("No data found");
        return;
      }

      // console.log(data);

      setData((prev) => {
        const combined = [...prev, ...data.results];

        const unique = Array.from(
          new Map(combined.map((item: any) => [item.id, item])).values()
        );

        return unique;
      });

      if (page >= data.total_pages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(`Error fetching data`, error);
      setErrorMessage("Error fetching data,Please try again later!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url, page]);

  return { data, loading, errorMessage, hasMore, setPage };
}
