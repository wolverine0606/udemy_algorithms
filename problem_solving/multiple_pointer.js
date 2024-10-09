const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      return [arr[left], arr[right]];
    }
  }
};

console.log(sumZero([-4, -2, 0, 1, 4, 5, 6]));
