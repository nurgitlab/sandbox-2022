import {FC, useContext} from "react";
import {AlertContext, useAlert} from "./AlertContext";

export const Alert:FC = () => {
  const alert = useAlert()

  const styles = {
    'color': 'red'
  }

  if (!alert) return null
  return (
    <div style={styles} className={"alert"}>
      Very important message
    </div>
  )
}