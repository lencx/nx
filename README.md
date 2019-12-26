<p align="center">
  <a href="https://lencx.github.io/nx">
    <img width="100" src="./.storybook/nx.svg" />
  </a>
</p>

```bash
# create package
yarn nx <package_name>

# nx command
yarn nx [-bdirwhV] <package_name>
# -b   build
# -d   delete
# -i   install
# -uni uninstall
# -r   remove build directory
# -w   watch current package
# -h   help
# -V   version

# ---------------------------

# lerna publish
yarn release

# clear build
yarn clean # package/{lib,esm} & storybook-static

# install package dependencies
yarn bootstrap

# deploy storybook to gh-pages
yarn deploy

# run storybook
yarn storybook
```

## Packages

* @l8n/hooks - react hooks
* @l8n/antd - ant design
* @l8n/rc - components
