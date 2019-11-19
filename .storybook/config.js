import { configure } from '@storybook/react';

configure(require.context('../stories', true, /.*\.(stories|story)\.(js|ts)x?$/), module);
