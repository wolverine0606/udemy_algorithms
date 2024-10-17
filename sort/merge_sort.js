const mergeArrays = (arr1, arr2) => {
  let count1 = 0;
  let count2 = 0;
  let res = [];
  while (count1 < arr1.length && count2 < arr2.length) {
    if (arr1[count1] <= arr2[count2]) {
      res.push(arr1[count1]);
      count1++;
    } else {
      res.push(arr2[count2]);
      count2++;
    }
  }
  //   while (count2 < arr2.length) {
  //     res.push(arr2[count2]);
  //     count2++;
  //   }
  //   while (count1 < arr1.length) {
  //     res.push(arr1[count1]);
  //     count1++;
  //   }
  if (count1 === arr1.length) res = res.concat(arr2.slice(count2, arr2.length));
  if (count2 === arr2.length) res = res.concat(arr1.slice(count1, arr1.length));

  return res;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArrays(left, right);
  // mergeSort()
};

//console.log(mergeArrays([1, 3, 5, 7, 20, 100, 120], [2, 4, 6, 8, 12]));
console.log(mergeSort([2, 7, 1, 4, 9, 3, 760, 15, 220]));
