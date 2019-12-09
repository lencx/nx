import { useState } from 'react';

/**
 * useToggle
 * @author lencx
 * @param {boolean} status
 */
export default function useToggle(status: boolean) {
  const [state, setState] = useState(status);
  const toggle = (): void => setState(!state);
  return [state, toggle] as const;
};
