const divideString = function (s, k, fill) {
  if (s % k !== 0) {
    while (s.length % k !== 0) {
      s += fill
    }
  }

  console.log(s)

};

console.log(divideString("abcdefghij", 3, "x"))