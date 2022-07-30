import React, {FunctionComponent} from "react";
import counter from "../store/counter";
import {observer} from "mobx-react-lite";

export const Counter: FunctionComponent = observer(() => {
        return (
            <div>
                <button onClick={() => counter.decrement()}>+</button>
                <button onClick={() => counter.increment()}>-</button>
                <div>
                    {counter.total}
                </div>
            </div>
        )
    }
)