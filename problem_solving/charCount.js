const count = (str) => {
  let res = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      res[char] = ++res[char] || 1;
    }
  }
  return res;
};
console.log(count("my phonNNNe number is 96987!?@"));
