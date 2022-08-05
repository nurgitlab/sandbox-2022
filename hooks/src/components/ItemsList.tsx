import {FC, useEffect, useState} from "react";

interface IProps {
  getItems: () => string[]
}

export const ItemsList: FC<IProps> = ({getItems}) => {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    const newItems = getItems()
    setItems(newItems)
    console.log("render")
  }, [getItems])
  return (
    <ul>
      {items.map(i => <li key={i}>{i}</li>)}
    </ul>
  )
}