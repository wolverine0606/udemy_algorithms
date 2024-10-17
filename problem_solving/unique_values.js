const unique = (arr) => {
  let first = 0;
  for (second = 1; second <= arr.length; second++) {
    if (arr[first] !== arr[second]) {
      first += 1;
      arr[first] = arr[second];
    }
  }
  return first;
};
console.log(
  unique([1, 1, 1, 1, 1, 1, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 7, 7, 7])
);
