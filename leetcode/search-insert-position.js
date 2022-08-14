var searchInsert = function (nums, target) {
  let index = Math.floor(nums.length/2)
  let otrezok = Math.floor(nums.length/2)
  let founded = false

  let lastIndex

  while (!founded) {
    if (lastIndex === index) break
    if (target === nums[index]) {
      founded = true
    } else if (target > nums[index]) {
      otrezok = Math.floor(otrezok/2)
      index = Math.floor(index/2 + otrezok)
    } else {
      otrezok = Math.floor(otrezok/2)
      index = Math.floor(index/2 - otrezok)
    }

    lastIndex = index
  }

  return index
};

console.log(searchInsert([1, 3, 5, 6], 2))