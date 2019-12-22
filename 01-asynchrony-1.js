console.log('Start');

//  async item: Task
setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');

//  output:
//  Start
//  End
//  Timeout
