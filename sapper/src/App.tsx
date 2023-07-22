import {useState} from 'react'
import {Board} from "./components/Board/Board";

function App() {
    const [isPlay, setIsPlay] = useState(true)

    return (
        <div>
            <button onClick={() => setIsPlay(!isPlay)}>New Game</button>
            {JSON.stringify(isPlay)}
            <Board isPlay={isPlay} setIsPlay={setIsPlay}/>
        </div>
    )
}

export default App
