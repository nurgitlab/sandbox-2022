import './App.css';
import {Transition} from "./Transition/Transition";


function App() {
    // const [loaderVisible, setLoaderVisible] = useState(false)
    //
    // useEffect(() => {
    //     setTimeout(() => setLoaderVisible(true), 1000)
    //     setTimeout(() => setLoaderVisible(false), 5000)
    // }, [])

    return (
        <div className="app">
            {/*<button onClick={() => setLoaderVisible(!loaderVisible)}>*/}
            {/*    {loaderVisible ? 'hide' : 'show'}*/}
            {/*</button>*/}
            {/*<div className="wrap">*/}
            {/*    /!*<CssTransition visible={loaderVisible} />*!/*/}
            {/*</div>*/}
            <Transition/>

        </div>
    );
}

export default App;
