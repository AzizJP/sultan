import {FC, memo} from 'react';

import {CounterProps} from './Counter.types';

import './Counter.scss';

const Counter: FC<CounterProps> = memo(({onIncrement, onDecrement, count}) => {
  return (
    <section className="counter">
      <button data-testid="decrement-button" onClick={onDecrement} className="counter__button">
        -
      </button>
      <span data-testid="value" className="counter__text">
        {count}
      </span>
      <button data-testid="increment-button" onClick={onIncrement} className="counter__button">
        +
      </button>
    </section>
  );
});

export default Counter;
