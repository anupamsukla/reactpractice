import { add, reset } from './redux/counter/actions'
import './App.css'
import { useEffect, useState } from 'react'
import { store } from './redux/store'

function App() {
  // const dispatch = useDispatch()
  // const counter = useSelector((state) => state.counterdata)
  const [counter, setCounter] = useState(() => {
    return 0
  })

  useEffect(() => {
    updatestate()
    store.subscribe(updatestate)
  }, [])

  const updatestate = () => {
    const state = store.getState()
    setCounter(state.counterdata)
  }

  return (
    <>
      <div className="App">
        <h1 onClick={() => store.dispatch(add(-1))}>-</h1>
        <h1>{counter.counter}</h1>
        <h1 onClick={() => store.dispatch(add(1))}>+</h1>
      </div>
      <h1
        style={{ color: 'green', margin: 'auto', textAlign: 'center' }}
        onClick={() => store.dispatch(reset())}
      >
        RESET
      </h1>
    </>
  )
}

export default App
