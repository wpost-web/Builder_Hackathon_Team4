import { createContext, useContext, useState, ReactNode } from 'react';

export interface SearchFilters {
  type: 'offers' | 'promotions';
  destination: string | null;
  resort: string | null;
  category: string | null;
  dateFrom: string | null;
  dateTo: string | null;
  sortBy: 'soonest' | 'value' | 'newest';
}

interface SearchContextValue {
  filters: SearchFilters;
  setFilters: (filters: Partial<SearchFilters>) => void;
  clearFilters: () => void;
}

const defaultFilters: SearchFilters = {
  type: 'offers',
  destination: null,
  resort: null,
  category: null,
  dateFrom: null,
  dateTo: null,
  sortBy: 'soonest',
};

const SearchContext = createContext<SearchContextValue>({
  filters: defaultFilters,
  setFilters: () => {},
  clearFilters: () => {},
});

export function SearchProvider({ children }: { children: ReactNode }) {
  const [filters, setFiltersState] = useState<SearchFilters>(defaultFilters);

  const setFilters = (partial: Partial<SearchFilters>) => {
    setFiltersState((prev) => ({ ...prev, ...partial }));
  };

  const clearFilters = () => setFiltersState(defaultFilters);

  return (
    <SearchContext.Provider value={{ filters, setFilters, clearFilters }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
