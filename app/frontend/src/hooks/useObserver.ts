import { useEffect, useRef, useState } from 'react';

export function useObserver(
  observableRef: React.MutableRefObject<Element | null>,
) {
  const [exposed, setExposed] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setExposed(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    if (observableRef.current) {
      observerRef.current?.observe(observableRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [observableRef]);

  return exposed;
}
