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
    const payload = {
      email:email,
      password:password,
    }
    dispatch(
      login(payload),
    )
  }
  const enterkey = (event => { 
    if (event.key === 'Enter') { 
      signinhandler();
    }
  }
  )


  return (
    <div className="App">
      <div>LOGIN FORM </div>
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Password' value={password}
        
          onChange={(e) => setPassword(e.target.value)}
        onKeyPress={(e) => enterkey(e)}
      />
      <button type="submit" onClick={(e) =>  signinhandler()}>SUBMIT</button>
    </div>
  )
}

export default Signin