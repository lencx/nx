import { useState, useRef, useEffect } from 'react';

/**
 * useDebounce
 * @author lencx
 * @param {object} debounce - payload: debounced value; callback: Only call effect if debounced value changes
 * @param {number} delay - millisecond(ms)
 */
export default function useDebounce(debounce: {
  payload: string,
  callback?: (payload: string) => void,
}, delay: number) {
  const { payload, callback } = debounce;
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const [debouncedValue, setDebouncedValue] = useState(payload);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebouncedValue(payload);
      if(payload && typeof callback === 'function') {
        callback(payload);
      }
    }, delay);

    return () => timer.current && clearTimeout(timer.current);
  }, [payload, delay]);

  return debouncedValue;
};
