import React, { useState } from 'react'
import ErrorContext from './ErrorContext'
const ErrorProvider = ({children}) => {
    const [errMsg, setErrMsg] = useState("")
  return (
    <ErrorContext.Provider value={{errMsg, setErrMsg}}>
        {children}
    </ErrorContext.Provider>
  )
}

export default ErrorProvider