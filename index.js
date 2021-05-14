const withAccount = fn => {
  let count = 0;
  
  return (...args) => {
    console.log(`call count: ${args}`);
    return fn(...args);
  }
}

const add = (a, b) => a + b;

const countedAdd = withAccount(add);

countedAdd(5, 6);