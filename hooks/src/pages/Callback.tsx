import React, {FC, useCallback, useMemo, useState} from "react";
import {ItemsList} from "../components/ItemsList";


export const Callback: FC = () => {
  const [number, setNumber] = useState<number>(0)
  const [colored, setColored] = useState<boolean>(false)

  const styles = {
    'fontSize': '40px',
    color: colored ? 'red' : 'black',
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(number).fill('').map((_,i)=> `Items id: ${i}`)
  }, [number])

  return (
    <div>
      <div>
        Callback
      </div>
      <div style={styles}>
        {number}
      </div>
      <button onClick={() => setNumber(number + 1)}>Plus</button>
      <button onClick={() =>setColored(!colored)}>Change</button>

      <ItemsList getItems={generateItemsFromAPI}/>
    </div>
  )
}