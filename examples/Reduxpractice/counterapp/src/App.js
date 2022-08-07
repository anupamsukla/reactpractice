import { useDispatch, useSelector } from 'react-redux'
import { add, reset } from './redux/counter/actions'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counterdata)
  return (
    <>
      <div className="App">
        <h1 onClick={() => dispatch(add(-1))}>-</h1>
        <h1>{counter.counter}</h1>
        <h1 onClick={() => dispatch(add(1))}>+</h1>
      </div>
      <h1
        style={{ color: 'green', margin: 'auto', textAlign: 'center' }}
        onClick={() => dispatch(reset())}
      >
        RESET
      </h1>
    </>
  )
}

export default App
