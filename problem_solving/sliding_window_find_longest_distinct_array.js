// function findLongestSubstring(str) {
//   let subArray = [];
//   let res = 0;
//   for (let first = 0; first < str.length; ) {
//     if (!subArray.includes(str[first])) {
//       subArray.push(str[first]);
//       first++;
//       res = Math.max(res, subArray.length);
//     } else {
//       res = Math.max(res, subArray.length);
//       subArray.shift();
//     }
//   }

//   return res;
// }
// console.log(findLongestSubstring("longestsubstring"));

const productOfArray = (arr) => {
  let res = arr[0];
  if (arr.length === 0) return 1;
  arr.shift();

  return (res = res * productOfArray(arr));
};
console.log(productOfArray([1, 2, 3, 4, 5]));
