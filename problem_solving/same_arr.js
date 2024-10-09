// const same_arr = (arr1, arr2) => {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   for (i in arr1) {
//     correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//     console.log(arr2);
//   }
//   return true;
// };

// console.log(same_arr([1, 2, 3], [1, 4, 11]));

const same_arr = (arr1, arr2) => {
  let frequencyCouner1 = {};
  let frequencyCouner2 = {};
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let val of arr1) {
    frequencyCouner1[val] = ++frequencyCouner1[val] || 1;
  }
  for (let val of arr2) {
    frequencyCouner2[val] = ++frequencyCouner2[val] || 1;
  }
  for (let key in frequencyCouner1) {
    if (!(key ** 2 in frequencyCouner2)) {
      return false;
    }
    if (frequencyCouner2[key ** 2] !== frequencyCouner1[key]) {
      return false;
    }
  }

  return true;
};

console.log(same_arr([1, 3, 3], [1, 9, 9]));

//purpose of second func is to reduce big O from O(n**2) to O(n)
