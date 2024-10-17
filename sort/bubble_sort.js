// const bubble = (arr) => {
//   while (true) {
//     let noSwaps = arr.length;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       } else noSwaps--;
//     }
//     console.log(noSwaps);

//     if (noSwaps === 0) return arr;
//   }
// };
// console.log(bubble([1, 6, 3, 4, 5, 15, 10, 4, 5, 0]));

const bubble = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
console.log(bubble([1, 6, 3, 4, 5, 15, 10, 4, 5, 0]));
