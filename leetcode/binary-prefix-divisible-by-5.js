const prefixesDivBy5 = function (nums) {
  let str = ''
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && str.length === 0) {
      str += ''
    } else {
      str += nums[i]
    }
    ans.push(toBase10(str) % 5 === 0)
  }
  return ans
}

const toBase10 = (str) => {
  let ans = 0
  for (let i = str.length - 1; i >= 0; i--) {
    ans += Number(str[str.length - 1 - i]) * Math.pow(2, i)
  }
  return ans
}

console.log(prefixesDivBy5([1, 1, 1]))