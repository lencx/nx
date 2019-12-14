# fs

> file handling

## Install

```bash
npm install @l8n/fs --save-dev
```

```bash
yarn add @l8n/fs --dev
```

## Usage

```js
import { insertLine, removeLine, updateLine, readFile } from '@l8n/fs';

const filename = './test/a.txt';
// insert line: line number optional
// if there is no line number, then the end of the file append.
insertLine(filename, 'test99', 9);

// remove line: exact match
removeLine(filename, 'test99');

// update line: exact match
updateLine(filename, 'old text', 'new text');

// returns array
readFile(filename);
```
