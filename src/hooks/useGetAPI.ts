import { useState, useEffect } from 'react';

const useGetAPI = (searchTerm: string) => {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNoTokenMessage, setShowNoTokenMessage] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const delayDebounceFn = setTimeout(() => {
      fetch(`/api/tokens?searchStr=${searchTerm}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (data.cions.length > 0) {
            setSearchResults(data.cions.map((item: any) => item.symbol));
            setShowNoTokenMessage(false);
            console.log(data);
          } else {
            setSearchResults([]);
            setShowNoTokenMessage(true);
          }
        })
        .catch((error) => {
          console.error('خطا در دریافت داده‌ها:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return { searchResults, isLoading, showNoTokenMessage };
};

export default useGetAPI;
