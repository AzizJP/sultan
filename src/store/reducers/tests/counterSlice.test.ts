import counterSlice, {decrement, increment} from '../counterSlice';

describe('counterReducer', () => {
  test('Should increment value', () => {
    expect(counterSlice({count: 0}, increment(10))).toEqual({count: 10});
  });
  test('Should decrement value', () => {
    expect(counterSlice({count: 0}, decrement(100))).toEqual({count: -100});
  });
});
