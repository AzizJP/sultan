import {FC, memo, useCallback} from 'react';

import {useAppDispatch} from '../../hooks/redux';

import {decrement, increment} from '../../store/reducers/counterSlice';

import {CounterProps} from './Counter.types';

import './Counter.scss';

const Counter: FC<CounterProps> = memo(({onIncrement, onDecrement, count}) => {
  const dispatch = useAppDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(increment(1));
    onIncrement();
  }, [dispatch, onIncrement]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement(1));
    onDecrement();
  }, [dispatch, onDecrement]);

  return (
    <section className="counter">
      <button onClick={handleDecrement} className="counter__button">
        -
      </button>
      <span className="counter__text">{count}</span>
      <button onClick={handleIncrement} className="counter__button">
        +
      </button>
    </section>
  );
});

export default Counter;
