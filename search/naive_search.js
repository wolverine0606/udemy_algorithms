const naiveSearch = (long, short) => {
  let res = 0;
  for (let i = 0; i < long.length; i++) {
    for (let y = 0; y < short.length; y++) {
      if (long[i + y] != short[y]) break;
      if (y === short.length - 1) res++;
    }
  }
  return res;
};

console.log(naiveSearch("asasdasdasdasdasd", "asd"));
