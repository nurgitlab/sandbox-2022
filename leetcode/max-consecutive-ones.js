const findMaxConsecutiveOnes = function(nums) {
  let max = 1
  let m = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      m++
    } else {
      m = 1
    }

    max = Math.max(max, m)
  }

  return max
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))