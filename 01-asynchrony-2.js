console.log('Main Start');
setTimeout(() => {
  setTimeout(() => {
    console.log('T2 Start');
    console.log('T2 End');
  });
  console.log('T1 Start');
  console.log('T1 End');
});

setTimeout(() => {
  console.log('T3 Start');
  console.log('T3 End');
});

console.log('Main End');
