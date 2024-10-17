const isSubsequence = (arr1, arr2) => {
  let extr = 0;
  for (let main = 0; main < arr2.length; main++) {
    if (arr2[main] === arr1[extr]) {
      extr++;
    }
  }

  return extr === arr1.length ? true : false;
};

console.log(isSubsequence("abc", "abr"));
