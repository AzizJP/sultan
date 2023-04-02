import {FC, memo, useCallback, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../../hooks/redux';

import {ReactComponent as ArrowIcon} from '../../../images/arrow-back.svg';
import {ReactComponent as DeleteIcon} from '../../../images/delete.svg';

import {setActiveFilter} from '../../../store/reducers/activeFilterSlice';
import {setCheckboxValues} from '../../../store/reducers/checkboxValueSlice';
import {setCardAfterSearch} from '../../../store/reducers/sidebarSearchSlice';

import {ActiveFilter} from '../../../types/types';
import Button from '../../Button/Button';
import FilterButton from '../SortFilterSection/FilterButton/FilterButton';
import {FILTER} from '../SortFilterSection/FilterButton/FilterButton.types';

import ManufacturerForm from './ManufacturerForm/ManufacturerForm';
import PriceForm from './PriceForm/PriceForm';
import {InputValueTypes} from './Sidebar.types';

import './Sidebar.scss';

const Sidebar: FC = memo(() => {
  const dispatch = useAppDispatch();
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const cards = useAppSelector(state => state.cards.cards);
  const activeType = useAppSelector(state => state.activeFilter.activeType);
  const activePrice = useAppSelector(state => state.activeFilter.activePrice);
  const activeManufacturer = useAppSelector(state => state.activeFilter.activeManufacturer);
  const checkboxValues = useAppSelector(state => state.checkboxValue.checkboxValues);
  const [showSidebar, setShowSidebar] = useState(false);
  const [inputValue, setInputValue] = useState<InputValueTypes>({
    first: activePrice[0],
    second: activePrice[1],
  });

  const toggleSidebar = useCallback(() => {
    setShowSidebar(!showSidebar);
  }, [showSidebar]);

  const handleInputValueChange = useCallback((value: InputValueTypes) => {
    setInputValue(value);
  }, []);

  const handleShowResults = useCallback(() => {
    const arr: ActiveFilter['activeManufacturer'] = [...activeManufacturer, ...checkboxValues];
    localStorage.setItem('activeManufacturer', JSON.stringify(arr));
    dispatch(setActiveFilter({key: 'activeManufacturer', value: arr}));

    const activePriceLocal: ActiveFilter['activePrice'] = [inputValue.first, inputValue.second];
    dispatch(setActiveFilter({key: 'activePrice', value: activePriceLocal}));
    localStorage.setItem('activePrice', JSON.stringify(activePriceLocal));
  }, [activeManufacturer, checkboxValues, dispatch, inputValue.first, inputValue.second]);

  const handleDeleteFilters = useCallback(() => {
    dispatch(setCardAfterSearch([]));

    setInputValue({
      first: 0,
      second: 10000,
    });
    dispatch(setActiveFilter({key: 'activePrice', value: [0, 10000]}));
    localStorage.removeItem('activePrice');

    dispatch(setCheckboxValues([]));
    dispatch(setActiveFilter({key: 'activeManufacturer', value: []}));
    localStorage.removeItem('activeManufacturer');
  }, [dispatch]);

  return (
    <section className="sidebar">
      <div className="sidebar__header">
        <h3 className="sidebar__header-title">ПОДБОР ПО ПАРАМЕТРАМ</h3>
        {isDesktop ? null : (
          <Button buttonClassName="sidebar__header-button" onClick={toggleSidebar}>
            <ArrowIcon
              className={`sidebar__header-button-icon ${showSidebar && 'sidebar__header-button-icon_rotate'}`}
            />
          </Button>
        )}
      </div>
      {isDesktop && (
        <>
          <PriceForm inputValue={inputValue} handleInputValueChange={handleInputValueChange} />
          <ManufacturerForm cards={cards} />
          <div className="sidebar__buttons">
            <Button title="Показать" buttonClassName="sidebar__show" onClick={handleShowResults} />
            <Button buttonClassName="sidebar__delete" onClick={handleDeleteFilters}>
              <DeleteIcon />
            </Button>
          </div>
          {isDesktop ? (
            <div className="sidebar__filter-buttons">
              {Object.keys(FILTER).map((key: keyof typeof FILTER) => (
                <FilterButton
                  key={key}
                  enumKey={key}
                  active={key === activeType}
                  className={`sidebar__filter-button ${key === activeType && 'sidebar__filter-button_active'}`}
                />
              ))}
            </div>
          ) : null}
        </>
      )}
      {showSidebar && (
        <>
          <PriceForm inputValue={inputValue} handleInputValueChange={handleInputValueChange} />
          <ManufacturerForm cards={cards} />
          <div className="sidebar__buttons">
            <Button title="Показать" buttonClassName="sidebar__show" onClick={handleShowResults} />
            <Button buttonClassName="sidebar__delete" onClick={handleDeleteFilters}>
              <DeleteIcon />
            </Button>
          </div>
          {isDesktop ? (
            <div className="sidebar__filter-buttons">
              {Object.keys(FILTER).map((key: keyof typeof FILTER) => (
                <FilterButton
                  key={key}
                  enumKey={key}
                  active={key === activeType}
                  className={`sidebar__filter-button ${key === activeType && 'sidebar__filter-button_active'}`}
                />
              ))}
            </div>
          ) : null}
        </>
      )}
    </section>
  );
});

export default Sidebar;
