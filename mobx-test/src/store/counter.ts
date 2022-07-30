import {makeAutoObservable, makeObservable} from "mobx";


class Counter {
    count: number = 0
    timer: number = 60

    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count - 1
    }

    decrement() {
        this.count = this.count + 1
    }

    get total() {
        return `Count + timer = ` + this.timer + this.count
    }
}

export default new Counter()