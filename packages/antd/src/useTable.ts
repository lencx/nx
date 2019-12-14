/**
 * useTable
 * @author lencx
 */

import { useReducer, useEffect } from 'react';

export const formatQuery = ({ pagination, sorter, filters, ...other }) => {
  const query = { ...filters, ...other };
  if (pagination) {
    const { current, pageSize, total } = pagination;
    query.current = current;
    query.pageSize = pageSize;
    query.total = total;
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

interface ITableProps {
  pagination: {
    pageSize: number,
    current: number,
    showQuickJumper: boolean,
    showSizeChanger: boolean,
    pageSizeOptions: string[],
    defaultPageSize: number,
    defaultCurrent: number,
    total: number,
    [key: string]: any,
  },
  loading: boolean,
  dataSource: object[],
  onChange: (...args: any[]) => void,
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
  const requestData = async (params: any, ...args: any) => {
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
    const mergeParams = {
      pagination,
      filters,
      sorter,
    };
    setState({...state, pagination: {...state.pagination, ...pagination, ...filters, ...sorter}});
    requestData({...state.pagination, ...mergeParams});
  }

  const tableFetch = (params: object, ...args: any) => {
    requestData({ pagination: state.pagination, ...params }, ...args)
  }

  const tableProps: ITableProps = {
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