import {FC, memo, useCallback} from 'react';

import {useAppDispatch, useAppSelector} from '../../../../../hooks/redux';

import {setActiveFilter} from '../../../../../store/reducers/activeFilterSlice';
import {setCheckboxValues} from '../../../../../store/reducers/checkboxValueSlice';

import {ManufacturerCheckboxProps} from './ManufacturerCheckbox.types';

import './ManufacturerCheckbox.scss';

const ManufacturerCheckbox: FC<ManufacturerCheckboxProps> = memo(({manufacturer, filteredCards}) => {
  const dispatch = useAppDispatch();
  const activeManufacturer = useAppSelector(state => state.activeFilter.activeManufacturer);
  const checkboxValues = useAppSelector(state => state.checkboxValue.checkboxValues);

  const handleCheckboxValueChange = useCallback(() => {
    if (checkboxValues.includes(manufacturer)) {
      const newArr = [...checkboxValues].filter(value => value !== manufacturer);
      dispatch(setCheckboxValues(newArr));
      dispatch(setActiveFilter({key: 'activeManufacturer', value: newArr}));
      localStorage.setItem('activeManufacturer', JSON.stringify(newArr));
    } else {
      const arr = [...checkboxValues, manufacturer];
      dispatch(setCheckboxValues(arr));
      dispatch(setCheckboxValues(arr));
    }
  }, [checkboxValues, dispatch, manufacturer]);

  const cardsByManufacturer = useCallback(() => {
    return filteredCards.filter(card => card.manufacturer === manufacturer).length;
  }, [filteredCards, manufacturer]);
  return (
    <div key={manufacturer} className="checkbox__wrapper">
      <input
        type="checkbox"
        name={`${manufacturer}`}
        id={`${manufacturer}`}
        className="checkbox__input"
        checked={activeManufacturer.includes(manufacturer) || checkboxValues.includes(manufacturer)}
        value={checkboxValues}
        onChange={handleCheckboxValueChange}
      />
      <label htmlFor={`${manufacturer}`} className="checkbox__label">
        {manufacturer}
        <span className="checkbox__label-amount">{` (${cardsByManufacturer()})`}</span>
      </label>
    </div>
  );
});

export default ManufacturerCheckbox;
