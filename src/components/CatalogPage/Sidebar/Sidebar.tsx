import {FC, memo, useCallback, useState} from 'react';

import {useAppSelector} from '../../../hooks/redux';

import {ReactComponent as ArrowIcon} from '../../../images/arrow-back.svg';
import {ReactComponent as ArrowTriangleIcon} from '../../../images/arrow-triangle.svg';
import {ReactComponent as DeleteIcon} from '../../../images/delete.svg';
import {ReactComponent as LoupeIcon} from '../../../images/loupe-white.svg';

import Button from '../../Button/Button';
import Form from '../../Form/Form';
import FilterButton from '../SortFilterSection/FilterButton/FilterButton';
import {FILTER} from '../SortFilterSection/FilterButton/FilterButton.types';

import './Sidebar.scss';

const Sidebar: FC = memo(() => {
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const cards = useAppSelector(state => state.cards.cards);
  const activeFilter = useAppSelector(state => state.activeFilter.activeFilter);
  const [showAll, setShowAll] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const filteredCards = cards.reduce((acc, card) => {
    const notFindDublicate = !acc.find(i => i.manufacturer === card.manufacturer);
    if (notFindDublicate) {
      acc.push(card);
    }
    return acc;
  }, []);

  const cardsByManufacturer = useCallback(
    (manufacturer: string) => {
      return cards.filter(card => card.manufacturer === manufacturer).length;
    },
    [cards],
  );

  const slicedCards = filteredCards.slice(0, 2);

  const toggleManufacturer = useCallback(() => {
    setShowAll(!showAll);
  }, [showAll]);

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
          <div className="sidebar__price">
            <h5 className="sidebar__price-title">
              Цена <span className="sidebar__price-title-dimension">₸</span>
            </h5>
            <form className="sidebar__price-form">
              <input type="text" className="sidebar__price-input" placeholder="0" />
              <span>-</span>
              <input type="text" className="sidebar__price-input" placeholder="10 000" />
            </form>
          </div>
          <div className="sidebar__manufacturer">
            <h4 className="sidebar__manufacturer-title">Производитель</h4>
            <Form
              placeholder="Поиск..."
              formClassName="sidebar__manufacturer-search-form"
              inputClassName="sidebar__manufacturer-search-form-input"
            >
              <LoupeIcon />
            </Form>
            <form className="sidebar__manufacturer-form">
              {(showAll ? filteredCards : slicedCards).map(card => (
                <div key={card.manufacturer} className="sidebar__manufacturer-form-input-wrapper">
                  <input
                    type="checkbox"
                    name={`${card.manufacturer}`}
                    id={`${card.manufacturer}`}
                    className="sidebar__manufacturer-form-input"
                  />
                  <label htmlFor={`${card.manufacturer}`} className="sidebar__manufacturer-form-input-label">
                    {card.manufacturer}
                    <span className="sidebar__manufacturer-form-input-label-amount">{` (${cardsByManufacturer(
                      card.manufacturer,
                    )})`}</span>
                  </label>
                </div>
              ))}
            </form>
            <Button
              title="Показать все"
              buttonClassName="sidebar__manufacturer-show-all"
              titleClassName="sidebar__manufacturer-show-all-title"
              onClick={toggleManufacturer}
            >
              <ArrowTriangleIcon
                className={`sidebar__manufacturer-show-all-icon ${
                  showAll && 'sidebar__manufacturer-show-all-icon_rotate'
                }`}
              />
            </Button>
          </div>
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
          <div className="sidebar__price">
            <h5 className="sidebar__price-title">
              Цена <span className="sidebar__price-title-dimension">₸</span>
            </h5>
            <form className="sidebar__price-form">
              <input type="text" className="sidebar__price-input" placeholder="0" />
              <span>-</span>
              <input type="text" className="sidebar__price-input" placeholder="10 000" />
            </form>
          </div>
          <div className="sidebar__manufacturer">
            <h4 className="sidebar__manufacturer-title">Производитель</h4>
            <Form
              placeholder="Поиск..."
              formClassName="sidebar__manufacturer-search-form"
              inputClassName="sidebar__manufacturer-search-form-input"
            >
              <LoupeIcon />
            </Form>
            <form className="sidebar__manufacturer-form">
              {(showAll ? filteredCards : slicedCards).map(card => (
                <div key={card.manufacturer} className="sidebar__manufacturer-form-input-wrapper">
                  <input
                    type="checkbox"
                    name={`${card.manufacturer}`}
                    id={`${card.manufacturer}`}
                    className="sidebar__manufacturer-form-input"
                  />
                  <label htmlFor={`${card.manufacturer}`} className="sidebar__manufacturer-form-input-label">
                    {card.manufacturer}
                  </label>
                </div>
              ))}
            </form>
            <Button
              title="Показать все"
              buttonClassName="sidebar__manufacturer-show-all"
              titleClassName="sidebar__manufacturer-show-all-title"
              onClick={toggleManufacturer}
            >
              <ArrowTriangleIcon
                className={`sidebar__manufacturer-show-all-icon ${
                  showAll && 'sidebar__manufacturer-show-all-icon_rotate'
                }`}
              />
            </Button>
          </div>
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
