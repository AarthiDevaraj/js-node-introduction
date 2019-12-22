const dns = require('dns');

//  Node core API is all async and callback based
//  error-first callback approach is follwed

dns.lookup('google.co.in', (err, addresses, family) => {
  if (err) {
    //  this is a typical pattern
    //  if error is falsy, the operation is deemed to be successful
    console.log('Error', err);
  } else {
    console.log('Result', addresses);
  }
});

//  https://en.wikipedia.org/wiki/List_of_DNS_record_types
dns.resolve('google.co.in', 'CNAME', (err, result) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Result', result);
  }
});

dns.resolveNs('google.co.in', (err, addresses) => {
  if (err) {
    console.log(err);
  } else {
    console.log(addresses);
  }
});
