import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider'

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if(loading) {
    return <div className='text-center'><Spinner>Loading</Spinner></div>
  }
  if(!user){
    return <Navigate to='/login' state={{from: location}} replace />
  }
  return children;
}

export default PrivateRoute