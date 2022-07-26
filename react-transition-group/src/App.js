import {useEffect, useState} from "react";
import {Transition} from "react-transition-group";
import './App.css';


function App() {
    const [loaderVisible, setLoaderVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoaderVisible(true), 1000)
        setTimeout(() => setLoaderVisible(false), 5000)
    }, [])

    return (
        <div className="App">
            <button onClick={() => setLoaderVisible(!loaderVisible)}>
                {loaderVisible ? 'hide' : 'show'}
            </button>
            <div className="wrap">
                <Transition
                    in={loaderVisible}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                    onEnter={() => console.log("onEnter")}
                >
                    {state => <div className={`circle ${state}`}></div>}
                </Transition>
            </div>
        </div>
    );
}

export default App;
