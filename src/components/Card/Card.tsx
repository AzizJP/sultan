import {FC, memo, useCallback} from 'react';
import {Link} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';

import {ReactComponent as BottleIcon} from '../../images/bottle.svg';
import {ReactComponent as BoxIcon} from '../../images/box.svg';
import {ReactComponent as BasketIcon} from '../../images/card-basket.svg';

import {setBasket} from '../../store/reducers/basketSlice';
import {setCard} from '../../store/reducers/cardSlice';
import {changePointToComma} from '../../utils/helpers';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';

import {CardProps, CardTypes} from './Card.types';

import './Card.scss';

const Card: FC<CardProps> = memo(({card}) => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(state => state.basketReducer.basket);

  const cardAmount = basket.filter(i => i.barcode === card.barcode).length;

  const cardsInBasket: Array<CardTypes> = [];
  basket.map(i => {
    if (i.barcode === card.barcode) {
      cardsInBasket.push(i);
    }
  });

  const isCardInBasket = cardsInBasket.length > 0;

  const handleIncrement = useCallback(() => {
    const newArray = [...basket];
    newArray.push(card);
    dispatch(setBasket(newArray));
    localStorage.setItem('basketArr', JSON.stringify(newArray));
  }, [basket, card, dispatch]);

  const handleDecrement = useCallback(() => {
    const newArray = [...basket];
    const taskIndex = newArray.findIndex(el => el.barcode === card.barcode);
    newArray.splice(taskIndex, 1);
    dispatch(setBasket(newArray));
    localStorage.setItem('basketArr', JSON.stringify(newArray));
  }, [basket, card, dispatch]);

  const handleCardClick = useCallback(() => {
    dispatch(setCard(card));
    localStorage.setItem('currentCard', JSON.stringify(card));
  }, [card, dispatch]);

  const handleAddCard = useCallback(() => {
    const newCard = {...card};
    const newArray = [...basket, newCard];
    dispatch(setBasket(newArray));
    localStorage.setItem('basketArr', JSON.stringify(newArray));
  }, [basket, card, dispatch]);

  return (
    <article className="card">
      <img src={card.url} alt="Изображение товара" className="card__image" />
      <div className="card__dimension">
        {card.dimensionType === 'мл' ? (
          <BottleIcon className="card__dimension-icon" />
        ) : (
          <BoxIcon className="card__dimension-icon" />
        )}
        <p className="card__dimension-value">{`${card.dimension} ${card.dimensionType}`}</p>
      </div>
      <Link to={`/catalog/${card.barcode}`} onClick={handleCardClick} className="card__link">
        <span className="card__link-brand">{`${card.brand} `}</span>
        <span className="card__link-name">{card.name}</span>
      </Link>
      <div className="card__info">
        <p className="card__text">
          Штрихкод: <span className="card__text-bold">{card.barcode}</span>
        </p>
        <p className="card__text">
          Производитель: <span className="card__text-bold">{card.manufacturer}</span>
        </p>
        <p className="card__text">
          Бренд: <span className="card__text-bold">{card.brand}</span>
        </p>
      </div>
      <div className="card__buy">
        <p className="card__price">{`${changePointToComma(card.price)} ₸`}</p>
        {isCardInBasket ? (
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
