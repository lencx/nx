// addDecorator
import React from 'react';
import 'antd/dist/antd.css';

export default (storyFn: any) => <div style={{ padding: 20 }}>{storyFn()}</div>;