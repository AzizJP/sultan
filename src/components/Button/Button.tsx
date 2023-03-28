import {FC, memo} from 'react';

import './Button.scss';
import {ButtonProps} from './Button.types';

const Button: FC<ButtonProps> = memo(({title, width, height, gap, children}) => {
  const buttonStyle = {
    width,
    height,
    gap,
  };

  return (
    <button type="button" className="button" style={buttonStyle}>
      <p className="button__text">{title}</p>
      {children}
    </button>
  );
});

export default Button;
