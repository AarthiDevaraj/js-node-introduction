const util = require('util');
const fs = require('fs');

//  convenient and preferred way to create promises out of node core api
let readFilePromise = util.promisify(fs.readFile);

//  { encoding: 'utf-8' } is the configuration object
//  otherwise, the file will be read as bytes
readFilePromise('example.txt', { encoding: 'utf-8' })
  .then(contents => console.log('File contents >>>', contents))
  .catch(error => console.error('Error >>>', error))
  .finally(() => console.log('File reading completed'));
