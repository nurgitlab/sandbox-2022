import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {Ref} from "./pages/Ref";
import {Memo} from "./pages/Memo";
import {Callback} from "./pages/Callback";


function App() {
  const {username} = useTypedSelector(state => state.storage)

  return (
    <div className="App">
      Приложение работает!
      <div>
        {username}
      </div>

      <Callback/>
    </div>
  );
}

export default App;