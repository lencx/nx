import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table, Input } from 'antd';
import { useTable } from '@l8n/antd';
import AntdDecorator from '../layout/AntdDecorator';

const randomStr = () => Math.random().toString(36).substring(2);

const testData: object[] = [];
for (let i = 0; i < 200; i++) {
  testData.push({ pid: randomStr(), other: 'xxx' });
}

storiesOf('Antd|useTable', module)
  .addDecorator(AntdDecorator)
  .add('Simple', () => {
    const { tableProps, tableFetch } = useTable({
      defaultPageSize: 5,
      paginationOptions: {
        showQuickJumper: false,
        pageSizeOptions: ['5', '10', '15']
      },
      async request(params) {
        const { current, pageSize, ...other } = params;

        console.log(`query: ${JSON.stringify(params)}`);

        const requestData: any = await new Promise((res, _rej) => {
          setTimeout(() => {
            res({
              data: testData,
              pageSize,
              total: 200,
              currentPage: current
            });
          }, 800);
        });

        // table props
        return {
          dataSource: requestData.data,
          pagination: {
            ...other,
            pageSize: requestData.pageSize,
            total: requestData.total,
            current: requestData.currentPage
          }
        };
      }
    });
    const handleSearch = (val: string) => {
      tableFetch({
        query: val
      });
    };
    // console.log(tableProps, '---tableProps');
    return (
      <React.Fragment>
        <h3>Mock Table</h3>
        <Input.Search style={{ width: 200 }} onSearch={handleSearch} />
        <Table
          {...tableProps}
          rowKey="pid"
          columns={[
            { dataIndex: 'pid', title: 'PID' },
            { dataIndex: 'other', title: 'Other' }
          ]}
        />
      </React.Fragment>
    );
  });