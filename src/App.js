import { useAppDispatch, useAppSelector } from "./app/hooks";
import { decrement, increment, incrementAmount } from './feature/counterSlice/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleIncrementClick = () => {
    dispatch(increment())
  }

  const handleDecrementClick = () => {
    dispatch(decrement())
  }

  const handleAmountIncrement = () => {
    dispatch(incrementAmount(3))
  }

  return (
    <div className="container">
      <h1>React Redux Toolkit</h1>
      <h2 className="counter">{count}</h2>
      <div className="content">
        <button onClick={handleIncrementClick} className="button-primary">+</button>
        <button onClick={handleDecrementClick} className="button-primary">-</button>
        <button onClick={handleAmountIncrement} className="button-primary">Increment by 3</button>
      </div>
    </div>
  );
}

export default App;
