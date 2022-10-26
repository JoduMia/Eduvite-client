import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
  return (
    <>
        {children}
    </>
  )
}

export default PrivateRoute