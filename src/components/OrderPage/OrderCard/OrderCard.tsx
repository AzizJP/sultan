import {FC, memo, useCallback} from 'react';
import {Link} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../../hooks/redux';

import {ReactComponent as BottleIcon} from '../../../images/bottle.svg';
import {ReactComponent as BoxIcon} from '../../../images/box.svg';
import {ReactComponent as DeleteIcon} from '../../../images/delete.svg';

import {setBasket} from '../../../store/reducers/basketSlice';

import {changePointToComma} from '../../../utils/helpers';

import Button from '../../Button/Button';
import {CardProps, CardTypes} from '../../CatalogPage/Cards/Card/Card.types';
import Counter from '../../Counter/Counter';

import './OrderCard.scss';

const OrderCard: FC<CardProps> = memo(({card}) => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(state => state.basket.basket);
  const {url, name, barcode, dimension, dimensionType, brand, price, description} = card;

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

  const handleDeleteCard = useCallback(() => {
    const newArray = [...basket];
    const deletedCardArray: Array<CardTypes> = [];
    newArray.map(i => {
      if (i.barcode !== barcode) {
        deletedCardArray.push(i);
      }
    });
    dispatch(setBasket(deletedCardArray));
    localStorage.setItem('basketArr', JSON.stringify(deletedCardArray));
  }, [basket, barcode, dispatch]);

  return (
    <article className="order-card">
      <div className="order-card__info">
        <div className="order-card__image-wrapper">
          <img src={url} alt="Изображение товара" className="order-card__image" />
        </div>
        <div className="order-card__description">
          <div className="order-card__dimension">
            {dimensionType === 'мл' ? (
              <BottleIcon className="card__dimension-icon" />
            ) : (
              <BoxIcon className="card__dimension-icon" />
            )}
            <p className="card__dimension-value">{`${dimension} ${dimensionType}`}</p>
          </div>
          <Link to={`/catalog/${barcode}`} className="order-card__title">
            {`${brand} ${name}`}
          </Link>
          <p className="order-card__description-text">{description}</p>
        </div>
      </div>
      <div className="order-card__settings">
        <div className="order-card__counter">
          <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} count={cardAmount} />
        </div>
        <p className="order-card__price">{`${changePointToComma(price * cardAmount)} ₸`}</p>
        <Button buttonClassName="order-card__delete" onClick={handleDeleteCard}>
          <DeleteIcon />
        </Button>
      </div>
    </article>
  );
});

export default OrderCard;
