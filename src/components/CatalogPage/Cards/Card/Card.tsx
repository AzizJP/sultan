import {FC, memo, useCallback} from 'react';
import {Link} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';

import {ReactComponent as BottleIcon} from '../../../../images/bottle.svg';
import {ReactComponent as BoxIcon} from '../../../../images/box.svg';
import {ReactComponent as BasketIcon} from '../../../../images/card-basket.svg';

import {setBasket} from '../../../../store/reducers/basketSlice';

import {changePointToComma} from '../../../../utils/helpers';

import Button from '../../../Button/Button';
import Counter from '../../../Counter/Counter';

import {CardProps} from './Card.types';

import './Card.scss';

const Card: FC<CardProps> = memo(({card}) => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(state => state.basket.basket);
  const {url, name, barcode, dimension, dimensionType, brand, manufacturer, price} = card;

  const cardAmount = basket.filter(i => i.barcode === barcode).length;

  const handleIncrement = useCallback(() => {
    const newArray = [...basket];
    newArray.push(card);
    dispatch(setBasket(newArray));
    localStorage.setItem('basketArr', JSON.stringify(newArray));
  }, [basket, card, dispatch]);

  const handleDecrement = useCallback(() => {
    const newArray = [...basket];
    const taskIndex = newArray.findIndex(el => el.barcode === barcode);
    newArray.splice(taskIndex, 1);
    dispatch(setBasket(newArray));
    localStorage.setItem('basketArr', JSON.stringify(newArray));
  }, [barcode, basket, dispatch]);

  const handleAddCard = useCallback(() => {
    const newCard = {...card};
    const newArray = [...basket, newCard];
    dispatch(setBasket(newArray));
    localStorage.setItem('basketArr', JSON.stringify(newArray));
  }, [basket, card, dispatch]);

  return (
    <article className="card">
      <img src={url} alt="Изображение товара" className="card__image" />
      <div className="card__dimension">
        {dimensionType === 'мл' ? (
          <BottleIcon className="card__dimension-icon" />
        ) : (
          <BoxIcon className="card__dimension-icon" />
        )}
        <p className="card__dimension-value">{`${dimension} ${dimensionType}`}</p>
      </div>
      <Link to={`/catalog/${barcode}`} className="card__link">
        <span className="card__link-brand">{`${brand} `}</span>
        <span className="card__link-name">{name}</span>
      </Link>
      <div className="card__info">
        <p className="card__text">
          Штрихкод: <span className="card__text-bold">{barcode}</span>
        </p>
        <p className="card__text">
          Производитель: <span className="card__text-bold">{manufacturer}</span>
        </p>
        <p className="card__text">
          Бренд: <span className="card__text-bold">{brand}</span>
        </p>
      </div>
      <div className="card__buy">
        <p className="card__price">{`${changePointToComma(price)} ₸`}</p>
        {cardAmount > 0 ? (
          <div className="card__counter">
            <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={cardAmount} />
          </div>
        ) : (
          <Button
            title="В КОРЗИНУ"
            buttonClassName="card__button"
            titleClassName="card__button-title"
            onClick={handleAddCard}
          >
            <BasketIcon />
          </Button>
        )}
      </div>
    </article>
  );
});

export default Card;
