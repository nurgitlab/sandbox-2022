import {Canvas} from "@react-three/fiber";

import {Box} from "./Box";

function App() {
  return (
    <div className="App">
      This is Three Js
      <Canvas camera={{position: [0, 0, 5]}} style={{
        height: '200px',
        width: '200px',
        background: 'red'
      }}>
        <Box position={[0, 0, 1]}/>
      </Canvas>
    </div>
  );
}

export default App;
