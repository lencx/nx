/**
 * useTable
 * @author lencx
 */

import { useReducer, useEffect } from 'react';

export const formatQuery = ({ pagination, sorter, filters, ...other }) => {
  const query = { ...filters, ...other };
  if (pagination) {
    const { current, pageSize } = pagination;
    query.current = current;
    query.pageSize = pageSize;
  }
  if (sorter && sorter.field) {
    query.orderBy = sorter.field;
    query.order = sorter.order === 'ascend' ? 'asc' : 'desc';
  }
  return query;
};

interface ITableConfig {
  request: (...args: any[]) => any,
  autoFirstFetch?: boolean,
  defaultPageSize?: number,
  defaultCurrent?: number,
  paginationOptions?: object,
}

export default function useTable(tableConf: ITableConfig) {
  const {
    request, // trigger request
    autoFirstFetch = true, // initial request
    defaultPageSize = 10,
    defaultCurrent = 1,
    paginationOptions = {},
  } = tableConf;

  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    dataSource: [],
    pagination: {
      pageSize: defaultPageSize,
      current: defaultCurrent,
    },
    loading: false,
  })

  // fix: rest parameters - keep query parameters when paginating
  const requestData = async (params, ...args) => {
    setState({ loading: true });
    const result = await request(formatQuery(params), ...args);
    setState({ ...result, loading: false });
  }

  useEffect(() => {
    if (autoFirstFetch) {
      requestData(state.pagination);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = (pagination: object, filters: object, sorter: object) => {
    let _params = {
      pagination,
      filters,
      sorter,
    };
    setState({ ...state, pagination: { ...state.pagination, ..._params } });
    requestData(_params);
  }

  const tableFetch = (params: object, ...args: any) => {
    requestData({ pagination: state.pagination, ...params }, ...args)
  }

  const tableProps = {
    pagination: {
      pageSize: state.pagination.pageSize,
      current: state.pagination.current,
      showQuickJumper: true,
      showSizeChanger: true,
      pageSizeOptions: ['5', '10', '20', '50'],
      defaultPageSize,
      defaultCurrent,
      total: state.pagination.total,
      ...paginationOptions,
    },
    loading: state.loading,
    dataSource: state.dataSource,
    onChange,
  }

  return { tableProps, tableFetch } as const;
}