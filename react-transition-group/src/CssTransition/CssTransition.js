import {CSSTransition} from "react-transition-group";

import "./CssTransition.css"


export const CssTransition = ({visible}) => {

    return (
        <div>
            <CSSTransition
                in={visible}
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