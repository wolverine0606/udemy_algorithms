function binarySearch(arr, aim) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== aim && left <= right) {
    if (aim < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === aim ? middle : -1;
}
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    6
  )
);
