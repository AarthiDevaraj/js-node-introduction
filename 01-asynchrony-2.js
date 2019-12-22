//  start the main task

console.log('Main Start'); //  Stack item in main task

// async (Task) recognized. Task list is now Main, T1
setTimeout(() => {
  // async (Task) recognized. Task list is now Main, T2
  setTimeout(() => {
    console.log('T2 Start'); //  Stack item in T2
    console.log('T2 End'); //  Stack item in T2
  });
  console.log('T1 Start'); //  Stack item in T1
  console.log('T1 End'); //  Stack item in T1
});

// async (Task) recognized. Task list is now Main, T3
setTimeout(() => {
  console.log('T3 Start'); //  Stack item in T3
  console.log('T3 End'); //  Stack item in T3
});

console.log('Main End'); //  Stack item in main task
