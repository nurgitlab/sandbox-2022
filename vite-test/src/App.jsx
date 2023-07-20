import Name from "./Name.jsx";
import {useCallback, useState} from "react";

const names = [
  {model: 'A'},
  {model: 'B'},
  {model: 'C'},
]

function App() {
  const [counter, setCounter] = useState(0)

  const getValue = useCallback((item) => {
    console.log('Here|', item.model)
  }, [])

  return (
    <div>
      List: {counter} <button onClick={() => setCounter(counter + 1)}>+1</button>

      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        {names.map(name => <Name key={name.model} item={name} onClick={getValue}/>)}
      </div>
    </div>
  )
}

export default App
