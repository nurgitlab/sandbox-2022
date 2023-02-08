import {FC, useRef} from "react";
import {useFrame} from "@react-three/fiber";


export const Box: FC = (props: any) => {
  const ref: any = useRef()

  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1,1,3]}/>
      <meshBasicMaterial color="orange" />
    </mesh>
  )
}