import {FC, memo, useCallback, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';

import {ReactComponent as ArrowTriangleIcon} from '../../../../images/arrow-triangle.svg';
import {ReactComponent as LoupeIcon} from '../../../../images/loupe-white.svg';

import {setCardAfterSearch} from '../../../../store/reducers/sidebarSearchSlice';

import Button from '../../../Button/Button';
import Form from '../../../Form/Form';

import ManufacturerCheckbox from './ManufacturerCheckbox/ManufacturerCheckbox';

import {ManufacturerFormProps} from './ManufacturerForm.types';

import './ManufacturerForm.scss';

const ManufacturerForm: FC<ManufacturerFormProps> = memo(({cards, filteredCards}) => {
  const dispatch = useAppDispatch();
  const cardAfterSearch = useAppSelector(state => state.sidebarSearch.cardAfterSearch);
  const [showAll, setShowAll] = useState(false);
  const [searchFormValue, setSearchFormValue] = useState('');

  const handleValueChange = useCallback((value: string) => {
    setSearchFormValue(value);
  }, []);

  const filteredCardsByManufacturer = cards.reduce((acc, card) => {
    const notFindDublicate = !acc.find(i => i.manufacturer === card.manufacturer);
    if (notFindDublicate) {
      acc.push(card);
    }
    return acc;
  }, []);

  const handleSearch = useCallback(() => {
    const copyFilteredCards = [...filteredCardsByManufacturer].filter(
      card => card.manufacturer.toLowerCase().trim() === searchFormValue.toLowerCase().trim(),
    );
    dispatch(setCardAfterSearch(copyFilteredCards));
  }, [dispatch, filteredCardsByManufacturer, searchFormValue]);

  const slicedCards = filteredCardsByManufacturer.slice(0, 2);

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
          ? (cardAfterSearch.length > 0 && cardAfterSearch) || filteredCardsByManufacturer
          : (cardAfterSearch.length > 0 && cardAfterSearch) || slicedCards
        ).map(card => (
          <ManufacturerCheckbox
            key={card.manufacturer}
            manufacturer={card.manufacturer}
            filteredCards={filteredCards}
          />
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
