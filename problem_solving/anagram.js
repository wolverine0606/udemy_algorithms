// const anagram_frequency = (first, second) => {
//   const frequencyCouner = {};
//   if (first.length != second.length) {
//     return false;
//   }

//   for (let char of first) {
//     console.log(char);

//     frequencyCouner[char] = (frequencyCouner[char] || 0) + 1;
//   }

//   for (let key = 0; key < first.length; key++) {
//     let letter = second[key];
//     console.log(letter);

//     if (!frequencyCouner[letter]) {
//       return false;
//     } else {
//       frequencyCouner[letter] -= 1;
//     }
//   }
//   return true;
// };

const anagram_frequency = (arr1, arr2) => {
  let frequencyCouner1 = {};
  let frequencyCouner2 = {};
  console.log(typeof arr1);

  for (let char of arr1) {
    frequencyCouner1[char] = (frequencyCouner1[char] || 0) + 1;
  }
  for (let char of arr2) {
    frequencyCouner2[char] = (frequencyCouner2[char] || 0) + 1;
  }

  for (let key in frequencyCouner1) {
    if (!(key in frequencyCouner2)) {
      return false;
    }
    if (frequencyCouner1[key] !== frequencyCouner2[key]) {
      return false;
    }
  }
  return true;
};

console.log(anagram_frequency("qwerty", "qeywrt"));
