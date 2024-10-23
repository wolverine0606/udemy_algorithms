const getDigit = (num, place) => {
  const strNum = String(Math.abs(num));
  return strNum.length > place ? Number(strNum[-place + strNum.length - 1]) : 0;
};

const digitCount = (num) => {
  return String(Math.abs(num)).length;
};

const mostDigits = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(digitCount(arr[i]), max);
  }
  return max;
};

const radix = (arr) => {
  let maxDigitCount = mostDigits(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      digitBuckets[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};
console.log(radix([100000, 1, 12, 123, 1234, 1273, 1111, 2222, 10111]));
