import reducers from "./reducers"
import {combineReducers, applyMiddleware, createStore} from "redux"
import thunk, {ThunkDispatch} from "redux-thunk"
import {AnyAction} from "redux"

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ReduxState = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>