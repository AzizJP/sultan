export interface CounterProps {
  onIncrement?(): void;
  onDecrement?(): void;
  count: number;
}
