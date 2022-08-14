var addTwoNumbers = function (l1, l2) {
  let bigArr = []
  let litArr = []
  if (l1.length > l2.length) {
    bigArr = l1
    litArr = l2
  } else {
    bigArr = l2
    litArr = l1
  }

  for (let i =litArr.length; i < bigArr.length; i++){
    litArr.push(0)
  }

  let reg = 0
  let ans = []
  for (let i = 0; i < bigArr.length; i++) {
    if (litArr[i]+bigArr[i]+reg > 9) {
      ans.push((litArr[i]+bigArr[i]+reg)%10)
      reg = 1
    } else {
      ans.push(litArr[i]+bigArr[i]+reg)
      reg = 0
    }
  }

  if (reg > 0) {
    ans.push(1)
  }
  return ans
};

console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))