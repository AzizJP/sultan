import {FC, memo, ChangeEvent, useCallback} from 'react';

import {PriceFormProps} from './PriceForm.types';

import './PriceForm.scss';

const PriceForm: FC<PriceFormProps> = memo(({inputValue, handleInputValueChange}) => {
  const handleFirstInputChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>): void => {
      if (isNaN(parseInt(evt.target.value))) return;
      handleInputValueChange({...inputValue, first: parseInt(evt.target.value)});
    },
    [handleInputValueChange, inputValue],
  );

  const handleSecondInputChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>): void => {
      if (isNaN(parseInt(evt.target.value))) return;
      handleInputValueChange({...inputValue, second: parseInt(evt.target.value)});
    },
    [handleInputValueChange, inputValue],
  );

  return (
    <div className="sidebar-price">
      <h5 className="sidebar-price__title">
        Цена <span className="sidebar-price__title-dimension">₸</span>
      </h5>
      <form className="sidebar-price__form">
        <input
          type="text"
          className="sidebar-price__input"
          value={inputValue.first}
          onChange={handleFirstInputChange}
        />
        <span>-</span>
        <input
          type="text"
          className="sidebar-price__input"
          value={inputValue.second}
          onChange={handleSecondInputChange}
        />
      </form>
    </div>
  );
});

export default PriceForm;
