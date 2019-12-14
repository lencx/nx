import test from 'ava';
import { insertLine, removeLine, updateLine, readFile } from '../lib';

test('insert', t => {
	const filename = './test/file/test.txt';
	insertLine(filename, 'test99', 9);
	const fileData = readFile(filename);
	t.is(fileData[8], 'test99');
});

test('remove', t => {
	const filename = './test/file/test.txt';
	removeLine(filename, 'test99');
	const fileData = readFile(filename);
	fileData.map(item => {
		t.not(item, 'test99');
	})
});

test('update', t => {
	const filename = './test/file/test.txt';
	insertLine(filename, 'test02', 2);
	updateLine(filename, 'test02', 'test---2');
	const fileData = readFile(filename);
	const data = fileData.filter(item => item === 'test---2');
	t.is(data[0], 'test---2');
	removeLine(filename, 'test---2');
});
