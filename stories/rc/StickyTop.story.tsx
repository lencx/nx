import React from 'react';
import { storiesOf } from '@storybook/react';
import AntdDecorator from '../layout/AntdDecorator';
import { StickyTop } from '@l8n/rc';

storiesOf('Component|StickyTop', module)
  .addDecorator(AntdDecorator)
  .add('Simple', () => {
    return (
      <div>
        <StickyTop title={<h2>StickyTop Header</h2>}>
          <div style={{ height: 800, background: '#aaa' }}>StickyTop Content</div>
        </StickyTop>
        <StickyTop title={<h2>StickyTop Header2</h2>}>
          <div style={{ height: 800, background: '#ddd' }}>StickyTop Content</div>
        </StickyTop>
        <StickyTop title={<h2>StickyTop Header3</h2>}>
          <div style={{ height: 800, background: '#ccc' }}>StickyTop Content</div>
        </StickyTop>
      </div>
    )
  });