import {useEffect, useState} from "react";
import {Transition, CSSTransition} from "react-transition-group";
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
                {/*<Transition*/}
                {/*    in={loaderVisible}*/}
                {/*    timeout={500}*/}
                {/*    mountOnEnter*/}
                {/*    unmountOnExit*/}
                {/*    onEnter={() => console.log("onEnter")}*/}
                {/*>*/}
                {/*    {state => <div className={`circle ${state}`}></div>}*/}
                {/*</Transition>*/}

                <CSSTransition
                    in={loaderVisible}
                    timeout={500}
                    // classNames="circle"
                    classNames = {{
                        enterActive: 'circle-show',
                        enterDone: 'circle-rotate',
                        exitActive: 'circle-hide',
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    <div className={`circle`}></div>
                </CSSTransition>
            </div>
        </div>
    );
}

export default App;
