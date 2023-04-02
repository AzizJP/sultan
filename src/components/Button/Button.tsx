import {FC, memo} from 'react';

import './Button.scss';
import {ButtonProps} from './Button.types';

const Button: FC<ButtonProps> = memo(({title, buttonClassName, titleClassName, onClick, children, type = 'button'}) => {
  return (
    <button type={type} className={`button ${buttonClassName}`} onClick={onClick}>
      <p className={`button__text ${titleClassName}`}>{title}</p>
      {children}
    </button>
  );
});

export default Button;
