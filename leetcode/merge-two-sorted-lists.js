var mergeTwoLists = function(list1, list2) {
  let i = 0
  let j = 0
  let arr = []
  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      arr = [...arr, list1[i]]
      i++
    } else {
      arr = [...arr, list2[j]]
      j++
    }
  }

  for (let k = i; k < list1.length; k++) {
    arr = [...arr, list1[k]]
  }

  for (let l = i; l < list2.length; l++) {
    arr = [...arr, list2[l]]
  }

  return arr
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))