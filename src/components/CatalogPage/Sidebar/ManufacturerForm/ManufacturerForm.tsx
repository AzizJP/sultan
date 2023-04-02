import {FC, memo, useCallback, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';

import {ReactComponent as ArrowTriangleIcon} from '../../../../images/arrow-triangle.svg';
import {ReactComponent as LoupeIcon} from '../../../../images/loupe-white.svg';
import {setActiveFilter} from '../../../../store/reducers/activeFilterSlice';
import {setCheckboxValues} from '../../../../store/reducers/checkboxValueSlice';
import {setCardAfterSearch} from '../../../../store/reducers/sidebarSearchSlice';

import Button from '../../../Button/Button';
import Form from '../../../Form/Form';

import {ManufacturerFormProps, ManufacturerType} from './ManufacturerForm.types';

import './ManufacturerForm.scss';

const ManufacturerForm: FC<ManufacturerFormProps> = memo(({cards}) => {
  const dispatch = useAppDispatch();
  const activeManufacturer = useAppSelector(state => state.activeFilter.activeManufacturer);
  const checkboxValues = useAppSelector(state => state.checkboxValue.checkboxValues);
  const cardAfterSearch = useAppSelector(state => state.sidebarSearch.cardAfterSearch);
  const [showAll, setShowAll] = useState(false);
  const [searchFormValue, setSearchFormValue] = useState('');

  const handleValueChange = useCallback((value: string) => {
    setSearchFormValue(value);
  }, []);

  const handleCheckboxValueChange = useCallback(
    (type: keyof typeof ManufacturerType) => {
      if (checkboxValues.includes(type)) {
        const newArr = [...checkboxValues].filter(value => value !== type);
        dispatch(setCheckboxValues(newArr));
        localStorage.setItem('activeManufacturer', JSON.stringify(newArr));
        dispatch(setActiveFilter({key: 'activeManufacturer', value: newArr}));
      } else {
        const arr = [...checkboxValues, type];
        dispatch(setCheckboxValues(arr));
        dispatch(setCheckboxValues(arr));
      }
    },
    [checkboxValues, dispatch],
  );

  const filteredCards = cards.reduce((acc, card) => {
    const notFindDublicate = !acc.find(i => i.manufacturer === card.manufacturer);
    if (notFindDublicate) {
      acc.push(card);
    }
    return acc;
  }, []);

  const handleSearch = useCallback(() => {
    const copyFilteredCards = [...filteredCards].filter(
      card => card.manufacturer.toLowerCase().trim() === searchFormValue.toLowerCase().trim(),
    );
    dispatch(setCardAfterSearch(copyFilteredCards));
  }, [dispatch, filteredCards, searchFormValue]);

  const slicedCards = filteredCards.slice(0, 2);

  const cardsByManufacturer = useCallback(
    (manufacturer: string) => {
      return cards.filter(card => card.manufacturer === manufacturer).length;
    },
    [cards],
  );

  const toggleManufacturer = useCallback(() => {
    setShowAll(!showAll);
  }, [showAll]);

  return (
    <div className="sidebar-manufacturer">
      <h4 className="sidebar-manufacturer__title">Производитель</h4>
      <Form
        placeholder="Поиск..."
        formClassName="sidebar-manufacturer__search-form"
        inputClassName="sidebar-manufacturer__search-form-input"
        value={searchFormValue}
        handleValueChange={handleValueChange}
        handleSearch={handleSearch}
      >
        <LoupeIcon />
      </Form>
      <form className="sidebar-manufacturer__form">
        {(showAll
          ? (cardAfterSearch.length > 0 && cardAfterSearch) || filteredCards
          : (cardAfterSearch.length > 0 && cardAfterSearch) || slicedCards
        ).map(card => (
          <div key={card.manufacturer} className="sidebar-manufacturer__form-input-wrapper">
            <input
              type="checkbox"
              name={`${card.manufacturer}`}
              id={`${card.manufacturer}`}
              className="sidebar-manufacturer__form-input"
              checked={activeManufacturer.includes(card.manufacturer) || checkboxValues.includes(card.manufacturer)}
              value={checkboxValues}
              onChange={() => handleCheckboxValueChange(card.manufacturer)}
            />
            <label htmlFor={`${card.manufacturer}`} className="sidebar-manufacturer__form-input-label">
              {card.manufacturer}
              <span className="sidebar-manufacturer__form-input-label-amount">{` (${cardsByManufacturer(
                card.manufacturer,
              )})`}</span>
            </label>
          </div>
        ))}
      </form>
      <Button
        title="Показать все"
        buttonClassName="sidebar-manufacturer__show-all"
        titleClassName="sidebar-manufacturer__show-all-title"
        onClick={toggleManufacturer}
      >
        <ArrowTriangleIcon
          className={`sidebar-manufacturer__show-all-icon ${showAll && 'sidebar-manufacturer__show-all-icon_rotate'}`}
        />
      </Button>
    </div>
  );
});

export default ManufacturerForm;
