import '@storybook/addon-console';
import { create } from '@storybook/theming';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const nxLogo = require('./nx.svg');

addDecorator(withInfo);
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandImage: nxLogo,
      // colorPrimary: 'hotpink',
      // colorSecondary: 'orangered'
    }),
    showPanel: true,
    panelPosition: 'right',
  },
});

configure(require.context('../stories', true, /.*\.(stories|story)\.(js|ts)x?$/), module);
