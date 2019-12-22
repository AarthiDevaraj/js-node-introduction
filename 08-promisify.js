const util = require('util');
const fs = require('fs');

let readFilePromise = util.promisify(fs.readFile);

readFilePromise('example.txt', { encoding: 'utf-8' })
  .then(contents => console.log('File contents >>>', contents))
  .catch(error => console.error('Error >>>', error))
  .finally(() => console.log('File reading completed'));
