import {FC, memo} from 'react';

import {CounterProps} from './Counter.types';

import './Counter.scss';

const Counter: FC<CounterProps> = memo(({onIncrement, onDecrement, count}) => {
  return (
    <section className="counter">
      <button onClick={onDecrement} className="counter__button">
        -
      </button>
      <span className="counter__text">{count}</span>
      <button onClick={onIncrement} className="counter__button">
        +
      </button>
    </section>
  );
});

export default Counter;
