import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getusers } from './redux/action'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const apidata = useSelector((state) => state.data)
  useEffect(() => {
    dispatch(getusers())
  }, [dispatch])

  console.log(apidata)

  return (
    <div className="App">
      {apidata?.data.map((el, idx) => (
        <h1 key={idx}>{el.name}</h1>
      ))}
    </div>
  )
}

export default App
