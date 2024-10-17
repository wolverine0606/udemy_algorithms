function maxSubArraySum(arr, count) {
  let maxValue = 0;
  let subValue = 0;
  if (count > arr.length) return null;

  for (let i = 0; i < count; i++) {
    maxValue += arr[i];
    subValue = maxValue;
  }

  for (let i = count; i < arr.length; i++) {
    subValue = subValue + arr[i] - arr[i - count];
    maxValue = Math.max(maxValue, subValue);
  }

  return maxValue;
}
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
