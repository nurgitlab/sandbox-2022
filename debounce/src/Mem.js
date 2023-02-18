import {useEffect, useMemo, useState} from "react";
import {Result} from "./Result";


const nums = [9,8,7,6,5,4,3,2,1]

const sortedNums = () => {
  console.log('sort')
  return nums.sort((a,b) => a - b)
}

export const Mem = () => {
  const [val, setVal] = useState(0)
  const [r, setR] = useState(true)
  console.log('render')

  // const sortNums = useMemo(sortedNums, [])

  // const dcpm = useMemo(() => <Result n = {val}/>, [val])
  return (
    <div>
      {/*{sortNums.map(el => <div key={el}>{el}</div>)}*/}
      <button onClick={() => setVal(val - 1)}>-</button>
      {val}
      <button onClick={() => setVal(val + 1)}>+</button>
      <button onClick={() => setR(!r)}>Изменить состояние</button>
      <Result n={val}/>

      {/*{dcpm}*/}
    </div>
  )
}