import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {Ref} from "./pages/Ref";


function App() {
  const {username} = useTypedSelector(state => state.storage)

  return (
    <div className="App">
      Приложение работает!
      <div>
        {username}
      </div>

      <Ref/>
    </div>
  );
}

export default App;