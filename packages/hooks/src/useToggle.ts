import { useState } from 'react';

/**
 * useToggle
 * @author lencx
 * @param {boolean} state
 */
export default (status: boolean) => {
  const [state, setState] = useState(status);
  const toggle = (): void => setState(!state);
  return [state, toggle];
};
