import React, {FunctionComponent} from 'react';
import {Counter} from "./components/Counter";

import {Todo} from "./components/Todo";

import './App.css';


export const App: FunctionComponent = () => {
  return (
    <div className="App">
        <Counter/>
        <Todo/>
        <Todo/>
    </div>
  );
}
