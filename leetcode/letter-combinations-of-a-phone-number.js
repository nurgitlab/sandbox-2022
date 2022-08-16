var letterCombinations = function (digits) {
  let ans = []
  let ukazatel = []
  let lenghts = []
  let numStr = digits.toString()

  for (let i = 0; i < numStr.length; i++) {
    ukazatel[i] = 0
    let el = lettersInNumber(Number(numStr[i])).split('')
    lenghts[i] = el.length
    ans.push(el)
  }

  return ans
};

function lettersInNumber(number) {
  if (number === 2) {
    return 'abc'
  } else if (number === 3) {
    return 'def'
  } else if (number === 4) {
    return 'ghi'
  } else if (number === 5) {
    return 'jkl'
  } else if (number === 6) {
    return 'mno'
  } else if (number === 7) {
    return 'pqrs'
  } else if (number === 8) {
    return 'tuv'
  } else if (number === 9) {
    return 'wxyz'
  }
}

console.log(letterCombinations(23))