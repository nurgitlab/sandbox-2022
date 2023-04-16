import React from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {UserSlice} from "./store/reducers/UserSlice";

function App() {
  const dispatch = useAppDispatch()

  const {increment} = UserSlice.actions
  const {count} = useAppSelector(state => state.userReducer)
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}>+1</button>
    </div>
  );
}

export default App;
