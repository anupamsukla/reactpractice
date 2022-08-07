import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, reset } from './redux/action'

function App() {
  const [name, setname] = useState('')
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.todo)

  const deleteitem = (idx) => {
    console.log(idx)
    dispatch(remove(idx))
  }
  return (
    <div className="App">
      <div>{name}</div>
      <input
        name={name}
        value={name}
        onChange={(e) => setname(e.target.value)}
        type="text"
      />
      <div onClick={() => dispatch(add(name))}>add</div>
      <div>{JSON.stringify(data)}</div>
      <div onClick={() => dispatch(reset(name))}>RESET</div>
      <div onClick={remove}>
        {data.map((e, idx) => (
          <h1 key={idx} onClick={() => deleteitem(idx)}>
            {e}
          </h1>
        ))}
      </div>
    </div>
  )
}

export default App
