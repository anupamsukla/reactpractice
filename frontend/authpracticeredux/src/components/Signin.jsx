import React, { useState } from 'react'

import {useDispatch} from 'react-redux'
import { login } from '../redux/login/action'


const Signin = () => {
  const [email, setEmail] = useState(() => { 
    return ""
  })
  const [password, setPassword] = useState(() => { 
    return ""
  })

   
  const dispatch = useDispatch()    
  const signinhandler = () => {
    dispatch(
      login({
        email,
        password,
      }),
    )
  }
    

  return (
    <div className="App">
      <div>LOGIN FORM </div>
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={() => signinhandler()}>SUBMIT</button>
    </div>
  )
}

export default Signin