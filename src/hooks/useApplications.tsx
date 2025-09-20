import { useState } from "react";

type UseApplicationsReturn = {
  loading: boolean;
  error: string | null;
  getApplications: (page: number, limit: number) => Promise<void>;
}

export function useApplications(): UseApplicationsReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getApplications = async (page:number, limit:number) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`http://localhost:3001/api/applications?_page=${page}&_limit=${limit}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const json = await res.json();
      return json;
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return {loading, error, getApplications };

}
