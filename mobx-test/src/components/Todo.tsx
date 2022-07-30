import {FunctionComponent} from "react";
import {observer} from "mobx-react-lite";
import todo from "../store/todo"


export const Todo: FunctionComponent = observer(
    () => {
        return (
            <div>
                <button onClick={()=>todo.fetchTodos()}>
                    GetData
                </button>
                {todo.todos.map(t =>
                    <div
                        className={"todo"}
                        key={t.id}
                    >
                        <input
                            type={"checkbox"}
                            checked={t.completed}
                            onChange={() => todo.completeTodo(t.id)}
                        />
                        {t.title}
                        <button
                            onClick={() => todo.removeTodo(t.id)}
                        >
                            x
                        </button>
                    </div>
                )}
            </div>
        )
    }
)

