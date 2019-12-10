import { useReducer, useRef, useEffect } from 'react';

/**
 * useDebounce
 * @author lencx
 * @param {object} debounce -
 * - payload: initial value;
 * - callback: only call effect if debounced value changes;
 * - initCall: whether the initial callback is enabled;
 * @param {number} delay - millisecond(ms)
 * @returns {object} -
 * - payload: debounce value;
 * - setPayload: set payload;
 */
export default function useDebounce(debounce: {
  initCall?: boolean,
  payload?: object | string,
  callback?: (payload: object | string) => void,
}, delay: number): {
  payload: any,
  setPayload: (payload: object | string) => void,
} {
  const { payload, callback, initCall = false } = debounce;
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    payload,
    initCall,
  });

  const handleCall = (data: object | string) => {
    if(typeof callback === 'function') {
      callback(data);
    }
  };

  useEffect(() => {
    timer.current = setTimeout(() => {
      if (state.initCall) {
        handleCall(state.payload);
      }
    }, delay);

    return () => timer.current && clearTimeout(timer.current);
  }, [state.payload, delay]);

  useEffect(() => {
    if (!state.initCall) {
      setState({ initCall: true });
    }
  }, [state.payload]);

  const setPayload = (data: object | string) => {
    if (typeof data === 'string') {
      setState({ payload: data });
    }
    if (typeof data === 'object') {
      setState({ payload: {...state.payload, ...data} });
    }
  };

  return { payload: state.payload, setPayload };
};
