import {FC, memo} from 'react';

import './Form.scss';
import {FormProps} from './Form.types';

const Form: FC<FormProps> = memo(({placeholder, width, height, backgroundColor, children}) => {
  const formStyle = {
    width,
    height,
    backgroundColor: backgroundColor,
  };
  const inputStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <form className="form" style={formStyle}>
      <input type="text" placeholder={placeholder} className="form__input" style={inputStyle} />
      <button type="submit" className="form__button">
        {children}
      </button>
    </form>
  );
});

export default Form;
