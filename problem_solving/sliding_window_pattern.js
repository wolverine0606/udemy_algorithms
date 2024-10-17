const maxSubArraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    return null;
  }
  for (i = 0; i < num; i++) {
    maxSum += arr[i];
    tempSum = maxSum;
  }
  for (i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 6, 4, 234, 12], 3));
