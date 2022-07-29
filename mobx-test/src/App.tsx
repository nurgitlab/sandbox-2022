import React, {FunctionComponent} from 'react';
import {Counter} from "./Counter";

import './App.css';


export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}
