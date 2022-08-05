import React, {FC, useEffect, useRef, useState} from "react";


export const Ref: FC = () => {

  const renderCountRef = useRef<number>(0)
  const prevValueRef = useRef<string>('')
  const [value, setValue] = useState<string>('default-value')

  useEffect(() => {
    renderCountRef.current++;
  })

  useEffect(()=>{
    prevValueRef.current = value
  }, [value])

  return (
    <div>
      <div>
        Количество рендеров: {renderCountRef.current}
      </div>
      <div>
        Предыдущее состояние: {prevValueRef.current}
      </div>
      <div>
        {value}
      </div>
      <input
        onChange={e => setValue(e.target.value)}
        value={value}
      />
    </div>
  )
}