import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { decrement, increment, incrementAmount } from './feature/counterSlice/counterSlice'
import { useFetchBreedsQuery } from "./feature/dogs/dogsApiSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const [dogFetchedAmount, setDogFetchedAmount] = useState(10)
  const { data = [], isFetching, isLoading } = useFetchBreedsQuery(dogFetchedAmount)

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
      <hr />
      <div>
        <h3>Amount of dogs to be fetched</h3>
        <select value={dogFetchedAmount} onChange={(e) => setDogFetchedAmount(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        {isLoading && <h2>Loading...</h2>}
        <div className="dog-cards">
          {data.map((dog) => (
            <div key={dog.id} className="dog-card">
              <div>
                <h4>Name: {dog.name}</h4>
                <p><strong>Origin: {dog.origin}</strong></p>
                <p><strong>Temperament:</strong> {dog.temperament}</p>
              </div>
              <img src={dog.image.url} alt={dog.name} className="dog-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
