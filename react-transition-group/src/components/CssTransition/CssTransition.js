import {CSSTransition} from "react-transition-group";

import "./CssTransition.css"
import {useEffect, useState} from "react";


export const CssTransition = () => {
    const [loaderVisible, setLoaderVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoaderVisible(true), 1000)
        setTimeout(() => setLoaderVisible(false), 5000)
    }, [])

    return (
        <div>
            <button onClick={() => setLoaderVisible(!loaderVisible)}>
                {loaderVisible ? 'hide' : 'show'}
            </button>

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
    )
}