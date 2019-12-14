/**
 * fs
 * @author lencx
 * insertLine, removeLine, updateLine
 */

import * as fs from 'fs';

export function insertLine(filename: string, text: string, lineNumber?: number) {
  let file: string[] = readFile(filename);
  // one extra line at the actual position when the file is empty
  if (file[file.length - 1] === '') {
    file.pop();
  }
  if (!file) return;
  if (!lineNumber) {
    // if no `lineNumber` parameters, then the end of the file append.
    file.push(text);
  } else {
    // if `lineNumber` is greater than the actual number of lines in the file,
    // multiple blank lines are generated.
    if (file.length < lineNumber) {
      for (let i = 0; i < (lineNumber - file.length - 1); i++) {
        file.push('\n');
      }
    }
    file.splice(lineNumber - 1, 0, text);
  }
  // write data to file
  fs.writeFileSync(filename, file.join('\n'), 'utf8');
}

export function removeLine(filename: string, removeText: string) {
  const file = readFile(filename);
  if (!file) return;
  updateElement(file, removeText);
  fs.writeFileSync(filename, file.join('\n'), 'utf8');
}

export function updateLine(filename: string, oldText: string, newText: string) {
  const file = readFile(filename);
  if (!file) return;
  updateElement(file, oldText, newText);
  fs.writeFileSync(filename, file.join('\n'), 'utf8');
}

export function readFile(filename: string): string[] {
  try {
    const fileData: string[] = fs.readFileSync(filename, 'utf8').split(/\r\n|\n/);
    return fileData;
  } catch (error) {
    console.error(
      error.code === 'ENOENT'
        ? `Error: [${filename}] - no such file or directory`
        : error
    );
    return [];
  }
}

function updateElement(array: string[], item: string, newItem?: string) {
  const index = array.indexOf(item);
  if (index > -1) {
    if (!newItem) {
      array.splice(index, 1); // remove item
    } else {
      array.splice(index, 1, newItem); // update item
    }
  }
}
