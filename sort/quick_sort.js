const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

console.log(quickSort([26, 1, 4, 80, 23, 14, 35, 2]));
