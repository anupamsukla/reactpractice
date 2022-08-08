import { useSelector } from 'react-redux'
import './App.css'
import Signin from './components/Signin'
import Signout from './components/Signout'

function App() {
  const authdata = useSelector((state) => state.logindata)
  console.log(authdata)
  return (
    <>
      {authdata?.username ? (
        <Signout />
      ) : authdata?.loading ? (
        <h1>Loading</h1>
      ) : (
        <Signin />
      )}
    </>
  )
}

export default App
