import React from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {UserSlice} from "./store/reducers/UserSlice";

function App() {
  const dispatch = useAppDispatch()


  return (
    <div className="App">
    </div>
  );
}

export default App;
