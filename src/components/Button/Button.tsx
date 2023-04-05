import {FC, memo} from 'react';

import {ButtonProps} from './Button.types';

import './Button.scss';

const Button: FC<ButtonProps> = memo(({title, buttonClassName, titleClassName, onClick, children, type = 'button'}) => {
  return (
    <button type={type} className={`button ${buttonClassName}`} onClick={onClick}>
      <p className={`button__text ${titleClassName}`}>{title}</p>
      {children}
    </button>
  );
});

export default Button;
