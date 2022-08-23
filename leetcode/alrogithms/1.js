let sl

function sum (n) {
  sl = n

  console.log(sl)
  function inSum (m) {
    return sum(n + m)
  }

  return inSum
}
console.log(sum(1)(2)(3)(4)(5)(6), sl)