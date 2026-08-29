import { useEffect, useState } from "react";

export default function useSectionLoading(delay = 420) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), delay);
    return () => window.clearTimeout(timer);
  }, [delay]);

  return isLoaded;
}
