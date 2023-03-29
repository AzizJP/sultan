import {FC, memo, useCallback} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';

import {ReactComponent as BottleIcon} from '../../images/bottle.svg';
import {ReactComponent as BoxIcon} from '../../images/box.svg';
import {ReactComponent as BasketIcon} from '../../images/card-basket.svg';
import {ReactComponent as DownloadIcon} from '../../images/download.svg';
import {ReactComponent as ShareIcon} from '../../images/share.svg';

import {setBasket} from '../../store/reducers/basketSlice';
import {decrement, increment} from '../../store/reducers/counterSlice';
import {changePointToComma} from '../../utils/helpers';
import Button from '../Button/Button';

import './CardPage.scss';

const CardPage: FC = memo(() => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(state => state.basketReducer.basket);
  const isDesktop = useAppSelector(state => state.breakpointReducer.isDesktop);
  const currentCard = useAppSelector(state => state.cardReducer.card);
  const count = useAppSelector(state => state.counterReducer.count);

  const handleAddCard = useCallback(() => {
    const newArray = [...basket, currentCard];
    dispatch(setBasket(newArray));
    localStorage.setItem('basketArr', JSON.stringify(newArray));
  }, [basket, currentCard, dispatch]);

  return (
    <section className="card-page">
      <img src={currentCard.url} alt="Изображение товара" className="card-page__image" />
      <div className="card-page__info">
        <p className="card-page__presence">В наличии</p>
        <h3 className="card-page__title">
          <span className="card-page__title-brand">{`${currentCard.brand} `}</span>
          <span className="card-page__title-name">{currentCard.name}</span>
        </h3>
        {isDesktop ? (
          <div className="card-page__dimension">
            {currentCard.dimensionType === 'мл' ? (
              <BottleIcon className="card__dimension-icon" />
            ) : (
              <BoxIcon className="card__dimension-icon" />
            )}
            <p className="card__dimension-value">{`${currentCard.dimension} ${currentCard.dimensionType}`}</p>
          </div>
        ) : null}
        <div className="card-page__buy">
          <p className="card-page__price">{`${changePointToComma(currentCard.price)} ₸`}</p>
          <div className="card-page__counter">
            <button onClick={() => dispatch(decrement(1))} className="card-page__counter-button">
              -
            </button>
            <span className="card-page__counter-text">{count}</span>
            <button onClick={() => dispatch(increment(1))} className="card-page__counter-button">
              +
            </button>
          </div>
          <Button
            title="В корзину"
            buttonClassName="card-page__to-basket"
            titleClassName="card-page__to-basket-title"
            onClick={handleAddCard}
          >
            <BasketIcon />
          </Button>
          {isDesktop ? null : (
            <button className="card-page__share-button">
              <ShareIcon />
            </button>
          )}
        </div>
        <div className="card-page__links">
          {isDesktop ? (
            <button className="card-page__share-button">
              <ShareIcon />
            </button>
          ) : null}
          <p className="card-page__text">При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</p>
          <Button title="Прайс-лист" buttonClassName="card-page__button" titleClassName="card-page__button-title">
            <DownloadIcon className="card-page__button-icon" />
          </Button>
        </div>
      </div>
    </section>
  );
});

export default CardPage;
