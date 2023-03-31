function executeFunctions (functions) {
  let resultPromise = Promise.resolve();

  for (const func of functions) {
    resultPromise = resultPromise.then(result => {
      return Promise.resolve(func(result));
    });
  }

  return resultPromise;
}
function syncFunc1 () {
  return 1;
}

function syncFunc2 (value) {
  return value + 2;
}

async function asyncFunc1 (value) {
  return new Promise(resolve => setTimeout(() => resolve(value + 3), 1000));
}

async function asyncFunc2 (value) {
  return new Promise(resolve => setTimeout(() => resolve(value + 4), 1000));
}

const functions = [syncFunc1, asyncFunc1, syncFunc2, asyncFunc2];

executeFunctions(functions).then(result => {
  console.log(result); // 输出 10
});
