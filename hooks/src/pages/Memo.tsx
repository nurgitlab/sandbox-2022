import React, {FC, useEffect, useRef, useState, useMemo} from "react";


function complexCompute(num: number): number {
  console.log("in compute func")
  let i: number = 0
  while (i < 1000000000) i++
  return num * 2
}

export const Memo: FC = () => {
  const [number, setNumber] = useState<number>(0)
  const [colored, setColored] = useState<boolean>(false)

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  const styles = useMemo(() => {
    return {
      'fontSize': '40px',
      color: colored ? 'red' : 'black',
    }
  }, [colored])

  useEffect(() => {
    console.log("Стиль поменялся")
  }, [styles])

  return (
    <div>
      <div style={styles}>
        {computed}
      </div>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setColored(!colored)}>Изменить цвет</button>
    </div>
  )
}