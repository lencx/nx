import '@storybook/addon-console';
import { configure, addDecorator } from '@storybook/react';

configure(require.context('../stories', true, /.*\.(stories|story)\.(js|ts)x?$/), module);
