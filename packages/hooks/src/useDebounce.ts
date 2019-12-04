import { useState, useRef, useEffect } from 'react'

/**
 * useDebounce
 * @author lencx
 * @param {string} value
 * @param {number} delay - unit millisecond
 */
export default (value: string, delay: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => timer.current && clearTimeout(timer.current);
  }, [value, delay]);

  return debouncedValue;
};
