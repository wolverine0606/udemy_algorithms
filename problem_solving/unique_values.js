const unique = (arr) => {
  let first = 0;
  let second = 1;
  while (second <= arr.length) {
    if (arr[first] !== arr[second]) {
      first += 1;
      arr[first] = arr[second];
    }
    second += 1;
  }
  return first;
};
console.log(unique([]));
