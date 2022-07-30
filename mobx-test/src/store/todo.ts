import {action, makeAutoObservable, observable} from "mobx";
import axios from "axios";
import {json} from "stream/consumers";

interface todoInterface {
    id: number,
    title: string,
    completed: boolean
}

const API: string = 'https://jsonplaceholder.typicode.com/todos'

class Todo {
    todos: todoInterface[] = [
        // {id: 1, title: 'macbook', completed: false},
        // {id: 2, title: 'lenovo', completed: true},
        // {id: 3, title: 'asus', completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: todoInterface) {
        this.todos.push(todo)
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter((todo) =>
            todo.id !== id
        )
    }

    completeTodo(id: number) {
        this.todos = this.todos.map(todo => todo.id === id ? {
                ...todo, completed: !todo.completed
            } : todo
        )
    }

    fetchTodos() {
        axios.get(API).then(({data}) => {
            console.log(data)
            this.todos = [...this.todos, ...data]
        })
    }
}

export default new Todo()