import {useEffect, useState} from "react";

export const useBrokenState = (initValue) => {
  const [state, setState] = useState(initValue)
  const [counter, setCounter] = useState(10)

  useEffect(() => {
    console.log('changed', counter)


    if (counter === 0) {
      setCounter(10)
      setState(-10)
    } else {
      setCounter(counter - 1)
    }
  }, [state])
  return [
      state,
      setState
  ]
}