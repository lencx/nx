import { configure } from '@storybook/react';

configure(require.context('../src/.stories', true, /.*\.(stories|story)\.(js|ts)x?$/), module);
