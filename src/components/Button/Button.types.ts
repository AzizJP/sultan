import {MouseEventHandler, ReactNode} from 'react';

export interface ButtonProps {
  title?: string;
  buttonClassName: string;
  titleClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}
