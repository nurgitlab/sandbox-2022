import {FC} from "react";

interface IProps {
  toggle: () => void
}

export const Context: FC<IProps> = ({toggle}) => {
  return(
    <div>
      <div>Context</div>
      <button onClick={toggle}>Show Alert</button>
    </div>
  )
}