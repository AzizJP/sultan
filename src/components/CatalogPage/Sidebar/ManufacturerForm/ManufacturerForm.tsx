import {FC, memo, useCallback, useState} from 'react';

import {ReactComponent as ArrowTriangleIcon} from '../../../../images/arrow-triangle.svg';
import {ReactComponent as LoupeIcon} from '../../../../images/loupe-white.svg';

import Button from '../../../Button/Button';
import Form from '../../../Form/Form';

import {ManufacturerFormProps} from './ManufacturerForm.types';

import './ManufacturerForm.scss';

const ManufacturerForm: FC<ManufacturerFormProps> = memo(({cards}) => {
  const [showAll, setShowAll] = useState(false);

  const filteredCards = cards.reduce((acc, card) => {
    const notFindDublicate = !acc.find(i => i.manufacturer === card.manufacturer);
    if (notFindDublicate) {
      acc.push(card);
    }
    return acc;
  }, []);

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
      >
        <LoupeIcon />
      </Form>
      <form className="sidebar-manufacturer__form">
        {(showAll ? filteredCards : slicedCards).map(card => (
          <div key={card.manufacturer} className="sidebar-manufacturer__form-input-wrapper">
            <input
              type="checkbox"
              name={`${card.manufacturer}`}
              id={`${card.manufacturer}`}
              className="sidebar-manufacturer__form-input"
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
