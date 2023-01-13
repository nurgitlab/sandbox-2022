const calculate = function (s) {
  s = deleteSpaces(s)
  while (true) {
    let sk = 0
    let sm = 0
    let smId = -1
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        sk++
      }
      if (s[i]===')') {
        sk--
      }

      if (sm < sk) {
        sm = sk
        smId = i
      }
    }

    if (sm > 0) {
      let r = ''

      let rc = 0
      for (let i = smId; i < s.length; i++) {
        rc++
        if (s[i] === ')') {break}
        if (s[i] === '(') {continue}
        r+=s[i]
      }
      s = s.split('')
      for (let i = smId; i < smId + rc; i++) {
        s[i] = ''
      }
      s[smId] = String(sumWithout(r))
      s = s.join('')
      s = res(s)
    }
    if (sm === 0) {break}
  }


  return sumWithout(s)
}

function deleteSpaces(str) {
  let ans = ''
  str.split('').forEach(el => {
    if (el !== ' ') {
      ans += el
    }
  })

  return ans
}

function sumWithout(str) {
  let nums = []
  let n = ''
  for (let i = 0; i < str.length - 1; i++) {
    n += str[i]
    if (str[i + 1] === '+' || str[i + 1] === '-') {
      nums.push(n)
      n = ''
    }
  }

  n += str[str.length - 1]
  nums.push(n)
  nums = nums.map(el => Number(el))
  let sum = 0
  nums.forEach(el => sum += el)

  return sum
}

function res (str) {
  str = str.split('')
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === '+' && str[i+1] === '+') {
      str[i]='+'
      str[i+1]=''
    }
    if (str[i] === '+' && str[i+1] === '-') {
      str[i]='-'
      str[i+1]=''
    }
    if (str[i] === '-' && str[i+1] === '+') {
      str[i]='-'
      str[i+1]=''
    }
    if (str[i] === '-' && str[i+1] === '-') {
      str[i]='+'
      str[i+1]=''
    }
  }

  return str.join('')
}


console.log(calculate("(5-(1+(5)))"))