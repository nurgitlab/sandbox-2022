import {useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import "./AnimatedList.css"


const defaultList = [
    {
        id: 1,
        text: 'macbook'
    },
    {
        id: 2,
        text: 'lenovo'
    },
    {
        id: 3,
        text: 'asus'
    }
]


export const AnimatedList = () => {
    const [text, setText] = useState('')
    const [list, setList] = useState(defaultList)

    const addToList = () => {
        setList([...list, {id: Date.now(), text: text}])
        setText('')
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={addToList}>Добавить</button>
                {text}
            </div>

            <TransitionGroup component="ul">
                {list.map(({id, text}) => (
                    <CSSTransition
                        key={id}
                        timeout={500}
                        classNames="todo"
                    >
                        <li
                            className={"todo"}
                            onClick={() =>
                                setList([...list.filter(item => {
                                    if (item.id !== id) return true
                                    else return false
                                })])
                            }
                        >{id}. {text}
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}
