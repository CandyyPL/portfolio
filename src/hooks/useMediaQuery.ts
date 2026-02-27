import { useEffect, useState } from 'react';

export default function useMediaQuery(query: string) {
  const [doesMatch, setMatch] = useState(
    window.matchMedia(`(${query})`).matches
  );

  useEffect(() => {
    window
      .matchMedia(`(${query})`)
      .addEventListener('change', (e) => setMatch(e.matches));
  }, [query]);

  return doesMatch;
}
