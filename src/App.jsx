import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [reachedLimit, setReachedLimit] = useState(false)

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount((prev) => {
      const currentNum = prev - 1;
      if (currentNum < 0) {
        setReachedLimit(true)
        return 
      } else {
        return prev - 1
      }
    })
  }
  const handleReset = () => {
    setCount(0);
    setReachedLimit(false)
  }

  return (
   <section>
    <h1>Click Counter App</h1>

    <p>{reachedLimit ? "You've reached the limit!" : count}</p>

    <div className='counter-btns'>
      <button className='increase' onClick={handleIncrement} disabled={reachedLimit}>Increment</button>
      <button className='decrease' onClick={handleDecrement} disabled={reachedLimit}>Decrement</button>
      <button className='reset' onClick={handleReset}>Reset</button>
    </div>
   </section>
  )
}

export default App