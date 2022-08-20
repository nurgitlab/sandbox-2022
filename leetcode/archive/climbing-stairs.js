var climbStairs = function (n) {
  if (n < 2) {
    return 1
  }

  let mem = []
  for (let i = n; i > 0; i--) {
    if (n === i) {
      mem[i] = 1
    } else if (i === n - 1) {
      mem[i] = 1
    } else {
      mem[i] = mem[i + 1] + mem[i + 2]
    }
  }

  return (mem[1] + mem[2])
};

console.log(climbStairs(2))