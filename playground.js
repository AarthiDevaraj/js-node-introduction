let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // data to pass on to my users
    // resolve({ message: 'This is ok' });
    reject(new Error('Something went wrong'));
  }, 3000);
});

promise
  .then(response => console.log('Then', response))
  .catch(error => console.error('Catch', error));
