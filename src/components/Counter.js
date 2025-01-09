import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  }
  const increaseByN = () => {
    dispatch({ type: 'increase', value: 5 });
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }
  const reset = () => {
    dispatch({ type: 'reset' });
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByN}>Increment By N</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;