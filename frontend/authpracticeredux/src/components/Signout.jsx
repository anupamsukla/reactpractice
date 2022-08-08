import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/login/action'

const Signout = () => {
   
    const dispatch = useDispatch()
    const authdata = useSelector((state) => state.logindata)
    
    const signouthandler = () => {
        dispatch(logout())
    }


  return (
    <div className="App">
          <div>Welcome {authdata.username} </div>
      <button type="submit" onClick={() => signouthandler()}>signout</button>
    </div>
  )
}

export default Signout