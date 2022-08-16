var mergeKLists = function (lists) {
  if (lists.length <= 1) return lists
  let lengths = []
  let ukazatel = []
  let ans = []

  for (let i = 0; i < lists.length; i++) {
    lengths[i] = lists[i].length
    ukazatel[i] = 0
  }

  while (allRight(lengths, ukazatel)) {
    let minEl = null
    let minElId = null

    for (let i = 0; i < lists.length; i++) {
      if (minEl === null || minEl > lists[i][ukazatel[i]]) {
        minEl = lists[i][ukazatel[i]]
        minElId = i
      }
    }

    ans.push(lists[minElId][ukazatel[minElId]])
    ukazatel[minElId] += 1
  }

  return ans
};

function allRight(l, u) {
  let ans = true
  l.forEach((el, i) => {
    if (el <= u[i]) {
      ans = false
    }
  })

  return ans
}


console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]))