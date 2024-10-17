import { getData } from '@/app/helpers';
import { useEffect, useState } from 'react';

export const useQuery = <T>(query: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await getData<T>(query);

        if (isMounted) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (error_) {
        if (isMounted) {
          setError(String(error_));
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [query]);

  return {
    isLoading,
    error,
    data,
  };
};
