import {FC, memo, useCallback} from 'react';

import {useAppDispatch, useAppSelector} from '../../../hooks/redux';

import {ReactComponent as BottleIcon} from '../../../images/bottle.svg';
import {ReactComponent as BoxIcon} from '../../../images/box.svg';
import {ReactComponent as DeleteIcon} from '../../../images/delete.svg';

import {setBasket} from '../../../store/reducers/basketSlice';

import {changePointToComma} from '../../../utils/helpers';
import {CardProps, CardTypes} from '../../Card/Card.types';
import Counter from '../../Counter/Counter';

import './OrderCard.scss';

const OrderCard: FC<CardProps> = memo(({card}) => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(state => state.basketReducer.basket);

  const cardAmount = basket.filter(i => i.barcode === card.barcode).length;

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

  const handleDeleteCard = useCallback(() => {
    const newArray = [...basket];
    const deletedCardArray: Array<CardTypes> = [];
    newArray.map(i => {
      if (i.barcode !== card.barcode) {
        deletedCardArray.push(i);
      }
    });
    dispatch(setBasket(deletedCardArray));
    localStorage.setItem('basketArr', JSON.stringify(deletedCardArray));
  }, [basket, card.barcode, dispatch]);

  return (
    <article className="order-card">
      <div className="order-card__info">
        <div className="order-card__image-wrapper">
          <img src={card.url} alt="Изображение товара" className="order-card__image" />
        </div>
        <div className="order-card__description">
          <div className="order-card__dimension">
            {card.dimensionType === 'мл' ? (
              <BottleIcon className="card__dimension-icon" />
            ) : (
              <BoxIcon className="card__dimension-icon" />
            )}
            <p className="card__dimension-value">{`${card.dimension} ${card.dimensionType}`}</p>
          </div>
          <h2 className="order-card__title">{`${card.brand} ${card.name}`}</h2>
          <p className="order-card__description-text">{card.description}</p>
        </div>
      </div>
      <div className="order-card__settings">
        <div className="order-card__counter">
          <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={cardAmount} />
        </div>
        <p className="order-card__price">{`${changePointToComma(card.price * cardAmount)} ₸`}</p>
        <button className="order-card__delete" onClick={handleDeleteCard}>
          <DeleteIcon />
        </button>
      </div>
    </article>
  );
});

export default OrderCard;
