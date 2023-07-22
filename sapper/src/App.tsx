import {useState} from 'react'
import {Board} from "./components/Board/Board";
import styles from "./App.module.scss"
function App() {
    const [isPlay, setIsPlay] = useState(true)

    return (
        <div>
            <div className={styles.Container}>
                <button onClick={() => setIsPlay(!isPlay)}>New Game</button>
                {JSON.stringify(isPlay)}
                <Board isPlay={isPlay} setIsPlay={setIsPlay}/>
            </div>

        </div>
    )
}

export default App
