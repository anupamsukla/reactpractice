import React from 'react'

interface Props { 
    start?: number;
}

const Counter: React.FC<Props> = ({ start = 0 }) => {
    const [count, setCount] = React.useState<number>(() => { 
        return start<0?0:start;
    })

    const addvalue = (value: number):void =>  { 
        (count<=0 && value === -1)?
            setCount(prev => 0):
            setCount(prev => prev + value)
    }
  return (
      <div>Counter 
          
          <p onClick={() => addvalue(1)}>+</p>
          { count}
          <p onClick={() => addvalue(-1)}>-</p>
    </div>
  )
}

export default Counter