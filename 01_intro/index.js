import { readFile, writeFile } from 'fs/promises';

// __dirname does not work when using ES Module syntax in NodeJS
const getPath = (relFilePath) => new URL(relFilePath, import.meta.url);

try {
  const template = await readFile(getPath('./template.html'), 'utf-8');

  const data = {
    title: 'My new file',
    body: 'I wrote this file to the disk using Node',
  };

  let indexFile = template;

  Object.entries(data).forEach(([key, val]) => {
    indexFile = indexFile.replace(`{${key}}`, val);
  });

  await writeFile(getPath('./index.html'), indexFile);
} catch (err) {
  console.log(err.message);
}
