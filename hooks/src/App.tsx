import React, {useEffect, useRef, useState} from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {Ref} from "./pages/Ref";
import {Memo} from "./pages/Memo";
import {Callback} from "./pages/Callback";
import {Context} from "./pages/Context";
import {Alert} from "./components/Alert";
import {AlertProvider} from "./components/AlertContext";

import './App.css';


function App() {
  const {username} = useTypedSelector(state => state.storage)

  return (
    <AlertProvider>
      <div className="App">
        Приложение работает!
        <div>
          {username}
        </div>

        <Context toggle={()=>(console.log("1"))}/>
        <Alert/>
      </div>
    </AlertProvider>
  );
}

export default App;