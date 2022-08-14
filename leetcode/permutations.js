var permute = function (nums) {
  let ans = []
  let mem = []
  let n = nums.length
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (nums[i] !== nums[j]) {
        mem = nums
        console.log(mem[i], ' <->', mem[j])
        let m = mem[i]
        mem[i] = mem[j]
        mem[j] = m
        console.log(mem)
        ans = [...ans, mem]
        mem = []
      }
    }
  }

  return ans
};

console.log(permute([1, 2, 3]))