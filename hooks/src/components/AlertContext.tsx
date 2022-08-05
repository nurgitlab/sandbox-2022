import React, {FC, useContext, useState} from "react";

export const AlertContext = React.createContext(false)
export const useAlert = () => {
  return useContext(AlertContext)
}

export const AlertProvider:FC<any> = ({children}) => {
  const [alert, setAlert] = useState<boolean>(false)
  const toggle = () => setAlert(prev => !prev)

  return (
    <AlertContext.Provider value={alert}>
      {children}
    </AlertContext.Provider>
  )
}