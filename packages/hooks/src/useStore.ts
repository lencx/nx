import { useReducer } from 'react';
import _cloneDeep from 'lodash/cloneDeep';
import _set from 'lodash/set';
import _get from 'lodash/get';

/**
 * useStore
 * @author lencx
 * @param {object} - initial value
 * @example
 * const { state, set, get } = useStore({ visible: true, form: {name: 'lencx', age: 27 }});
 * set('form.name', 'Tom');
 * set('visible', false);
 * set({
 *   visible: false,
 *   'form.age': 20
 * });
 * get('form.name');
 */
export default function useStore(initState = {}) {
  const [state, setState] = useReducer((o: any, n: any) => ({ ...o, ...n }), {
    ...initState,
  });

  const set = (prefix: string | { [key: string]: any }, data?: any) => {
    const _data = _cloneDeep(state);
    if (typeof prefix === 'string') {
      _set(_data, prefix, data);
    }
    if (typeof prefix === 'object') {
      for (const key in prefix) {
        _set(_data, key, prefix[key]);
      }
    }
    setState(_data);
    return _data;
  };

  const get = (prefix: string) => _get(state, prefix);

  return { state, set, get };
}