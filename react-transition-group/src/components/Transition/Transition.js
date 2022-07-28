import {useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";

import "./Transition.css"


export const Transition = () => {
    const [mode, setMode] = useState("out-in")
    const [toggle, setToggle] = useState(false)

    const changeHandler = e => {
        e.preventDefault()
        setMode(e.target.value)
    }

    return (
        <>
            <div>
                <label htmlFor="out-in">out-in</label>
                <input
                    id="out-in"
                    name="radio"
                    value="out-in"
                    type="radio"
                    onChange={e => changeHandler(e)}
                />
                <label htmlFor="in-out">in-out</label>
                <input
                    id="in-out"
                    name="radio"
                    value="in-out"
                    type="radio"
                    onChange={e => changeHandler(e)}
                />
            </div>

            <SwitchTransition type={mode}>
                <CSSTransition
                    timeout={500}
                    classNames="fade"
                    key={toggle}
                >
                    <button onClick={() => setToggle(!toggle)}>
                        {toggle ? 'hello' : 'goodbye'}
                    </button>
                </CSSTransition>
            </SwitchTransition>
        </>
    )
}