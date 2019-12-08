import { useState } from 'react';

export type UseToggle = [boolean, () => void];

/**
 * useToggle
 * @author lencx
 * @param {boolean} status
 */
export default function useToggle(status: boolean): UseToggle {
  const [state, setState] = useState(status);
  const toggle = (): void => setState(!state);
  return [state, toggle];
};
