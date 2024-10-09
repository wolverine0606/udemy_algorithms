function addUpTo1(n) {
  // O(n)
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}
console.log(addUpTo1(10000000));

function addUpTo2(n) {
  //O(1)
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo2(10000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds `);
