import {FC, memo, useCallback, useState} from 'react';

import {useAppSelector} from '../../../hooks/redux';

import {ReactComponent as ArrowIcon} from '../../../images/arrow-back.svg';
import {ReactComponent as DeleteIcon} from '../../../images/delete.svg';

import Button from '../../Button/Button';
import FilterButton from '../SortFilterSection/FilterButton/FilterButton';
import {FILTER} from '../SortFilterSection/FilterButton/FilterButton.types';

import ManufacturerForm from './ManufacturerForm/ManufacturerForm';

import './Sidebar.scss';
import PriceForm from './PriceForm/PriceForm';

const Sidebar: FC = memo(() => {
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const cards = useAppSelector(state => state.cards.cards);
  const activeFilter = useAppSelector(state => state.activeFilter.activeFilter);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = useCallback(() => {
    setShowSidebar(!showSidebar);
  }, [showSidebar]);

  return (
    <section className="sidebar">
      <div className="sidebar__header">
        <h3 className="sidebar__header-title">ПОДБОР ПО ПАРАМЕТРАМ</h3>
        {isDesktop ? null : (
          <button className="sidebar__header-button" onClick={toggleSidebar}>
            <ArrowIcon className="sidebar__header-button-icon" />
          </button>
        )}
      </div>
      {isDesktop && (
        <>
          <PriceForm />
          <ManufacturerForm cards={cards} />
          <div className="sidebar__buttons">
            <Button title="Показать" buttonClassName="sidebar__show" />

            <Button buttonClassName="sidebar__delete">
              <DeleteIcon />
            </Button>
          </div>
          {isDesktop ? (
            <div className="sidebar__filter-buttons">
              {Object.keys(FILTER).map((key: keyof typeof FILTER) => (
                <FilterButton
                  key={key}
                  enumKey={key}
                  active={key === activeFilter}
                  className={`sidebar__filter-button ${key === activeFilter && 'sidebar__filter-button_active'}`}
                />
              ))}
            </div>
          ) : null}
        </>
      )}
      {showSidebar && (
        <>
          <PriceForm />
          <ManufacturerForm cards={cards} />
          <div className="sidebar__buttons">
            <Button title="Показать" buttonClassName="sidebar__show" />

            <Button buttonClassName="sidebar__delete">
              <DeleteIcon />
            </Button>
          </div>
          {isDesktop ? (
            <div className="sidebar__filter-buttons">
              {Object.keys(FILTER).map((key: keyof typeof FILTER) => (
                <FilterButton
                  key={key}
                  enumKey={key}
                  active={key === activeFilter}
                  className={`sidebar__filter-button ${key === activeFilter && 'sidebar__filter-button_active'}`}
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
