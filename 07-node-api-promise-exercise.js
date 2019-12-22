const dns = require('dns');

let lookupPromise = function(url) {
  return new Promise((resolve, reject) => {
    dns.lookup(url, (err, addresses, family) => {
      if (err) {
        // console.log('Error', err);
        reject(err);
      } else {
        // console.log('Result', addresses);
        resolve(addresses);
      }
    });
  });
};

lookupPromise('google.co.in')
  .then(response => console.log('Promise Resolved:', response))
  .catch(error => console.log('Promise Rejected', error))
  .finally(() => console.log('Promise completed'));
