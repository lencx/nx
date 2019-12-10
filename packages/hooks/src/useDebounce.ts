import { useReducer, useRef, useEffect } from 'react';

/**
 * useDebounce
 * @author lencx
 * @param {object} debounce -
 * - payload: debounced value;
 * - callback: only call effect if debounced value changes;
 * - initCall: initial callback;
 * @param {number} delay - millisecond(ms)
 */
export default function useDebounce(debounce: {
  payload: object | string,
  callback?: (payload: object | string) => void,
  initCall?: boolean,
}, delay: number) {
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

  const depend = [...(typeof payload === 'string' ? [payload] : Object.values(payload))];

  useEffect(() => {
    timer.current = setTimeout(() => {
      if (state.initCall) {
        if (typeof payload === 'object') {
          const newPayload = {...state.payload, ...payload};
          setState({ payload: newPayload });
          handleCall(newPayload);
        }
        if (typeof payload === 'string') {
          setState({ payload });
          handleCall(payload);
        }
      }
    }, delay);

    return () => timer.current && clearTimeout(timer.current);
  }, [...depend, delay]);

  useEffect(() => {
    if (!state.initCall) {
      setState({ initCall: true });
    }
  }, depend)

  return state.payload;
};
