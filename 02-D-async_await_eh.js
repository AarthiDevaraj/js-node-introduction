function f3(params) {
  console.log('Inside f3');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise settlement from f3');
      resolve(params);
    }, 2000);
  });
}

function f2(params) {
  console.log('Inside f2');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise settlement from f2');
      resolve(params);
    }, 2000);
  });
}

function f1(params) {
  console.log('Inside f1');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise settlement from f1');
      resolve(params);
    }, 2000);
  });
}

// Attempting with async and await

//  Rules:
//  await can be applied to a function that returns a promise
//  await statement should be inside a function marked as async
//  let r1 = await f1('great'); here, we wait till f1 returns the result
//  if any awaitable function were to reject, it becomes a runtime exception.
//  Therefore, the good practice is to cover all awaitable lines in try catch finally blocks
async function drive() {
  try {
    let r1 = await f1('great'); //  r1 is the result of f1, not the promise
    let r2 = await f2(r1);
    let r3 = await f3(r2);
    console.log(r3);
  } catch (error) {
    console.log('Oops!');
  }
}

drive();
