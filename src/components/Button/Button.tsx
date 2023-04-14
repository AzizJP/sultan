import {FC, memo} from 'react';

import {ButtonProps} from './Button.types';

import './Button.scss';

const Button: FC<ButtonProps> = memo(
  ({title, buttonClassName, titleClassName, onClick, children, type = 'button', disabled}) => {
    return (
      <button
        data-testid="button"
        type={type}
        className={`button ${buttonClassName}`}
        onClick={onClick}
        disabled={disabled}
      >
        <p className={`button__text ${titleClassName}`}>{title}</p>
        {children}
      </button>
    );
  },
);

export default Button;
