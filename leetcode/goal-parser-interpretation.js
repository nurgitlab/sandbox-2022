const interpret = function (command) {
  command = command.split('()').join('o')
  let ans = ''
  command.split('').forEach(el => {
    if (el !== '(' && el !== ')') {
      ans += el
    }
  })
  return ans
};

console.log(interpret("G()(al)"))