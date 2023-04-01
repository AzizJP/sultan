import {FC, memo} from 'react';

import './Form.scss';
import {FormProps} from './Form.types';

const Form: FC<FormProps> = memo(({placeholder, formClassName, inputClassName, children}) => {
  return (
    <form className={`form ${formClassName}`}>
      <input type="text" placeholder={placeholder} className={`form__input ${inputClassName}`} />
      <button type="submit" className="form__button">
        {children}
      </button>
    </form>
  );
});

export default Form;
