import {ChangeEvent, FC, FormEvent, memo, useCallback} from 'react';

import './Form.scss';
import {FormProps} from './Form.types';

const Form: FC<FormProps> = memo(
  ({placeholder, formClassName, inputClassName, value, handleValueChange, handleSearch, children}) => {
    const handleSearchFormChange = useCallback(
      (evt: ChangeEvent<HTMLInputElement>): void => {
        handleValueChange(evt.target.value);
      },
      [handleValueChange],
    );

    const handleSubmit = useCallback(
      (evt: FormEvent<HTMLFormElement>): void => {
        evt.preventDefault();
        handleSearch(value);
        handleValueChange('');
      },
      [handleSearch, handleValueChange, value],
    );

    return (
      <form className={`form ${formClassName}`} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          className={`form__input ${inputClassName}`}
          value={value}
          onChange={handleSearchFormChange}
        />
        <button type="submit" className="form__button">
          {children}
        </button>
      </form>
    );
  },
);

export default Form;
