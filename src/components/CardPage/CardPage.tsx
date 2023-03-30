import {FC, memo, useCallback} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';

import {ReactComponent as ArrowTriangleIcon} from '../../images/arrow-triangle.svg';
import {ReactComponent as BottleIcon} from '../../images/bottle.svg';
import {ReactComponent as BoxIcon} from '../../images/box.svg';
import {ReactComponent as BasketIcon} from '../../images/card-basket.svg';
import {ReactComponent as DownloadIcon} from '../../images/download.svg';
import {ReactComponent as ShareIcon} from '../../images/share.svg';

import {setBasket} from '../../store/reducers/basketSlice';
import {setIsOpenDescription, setIsOpenSpecification} from '../../store/reducers/cardInfoSlice';
import {decrement, increment, setCount} from '../../store/reducers/counterSlice';
import {changePointToComma} from '../../utils/helpers';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';

import './CardPage.scss';

const CardPage: FC = memo(() => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(state => state.basketReducer.basket);
  const isDesktop = useAppSelector(state => state.breakpointReducer.isDesktop);
  const currentCard = useAppSelector(state => state.cardReducer.card);
  const count = useAppSelector(state => state.counterReducer.count);
  const isOpenDescription = useAppSelector(state => state.cardInfoReducer.isOpenDescription);
  const isOpenSpecification = useAppSelector(state => state.cardInfoReducer.isOpenSpecification);

  const handleAddCard = useCallback(() => {
    const newArray = [...basket];
    dispatch(setCount(1));
    for (let i = 1; i <= count; i++) {
      newArray.push(currentCard);
    }
    dispatch(setBasket(newArray));
    localStorage.setItem('basketArr', JSON.stringify(newArray));
  }, [basket, count, currentCard, dispatch]);

  const toggleDescriptionOpen = useCallback(() => {
    dispatch(setIsOpenDescription(!isOpenDescription));
  }, [dispatch, isOpenDescription]);

  const toggleSpecificationOpen = useCallback(() => {
    dispatch(setIsOpenSpecification(!isOpenSpecification));
  }, [dispatch, isOpenSpecification]);

  const handleIncrement = useCallback(() => {
    dispatch(increment(1));
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement(1));
  }, [dispatch]);

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
          <Counter count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
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
        <div className="card-page__card-info">
          <p className="card-page__card-text">
            Производитель: <span className="card__text-bold">{currentCard.manufacturer}</span>
          </p>
          <p className="card-page__card-text">
            Бренд: <span className="card-page__card-text-bold">{currentCard.brand}</span>
          </p>
          <p className="card-page__card-text">
            Артикул: <span className="card-page__card-text-bold">{currentCard.barcode.slice(0, 6)}</span>
          </p>
          <p className="card-page__card-text">
            Штрихкод: <span className="card-page__card-text-bold">{currentCard.barcode}</span>
          </p>
        </div>
        <Button
          title="Описание"
          buttonClassName="card-page__description-button"
          titleClassName="card-page__description-button-title"
          onClick={toggleDescriptionOpen}
        >
          <ArrowTriangleIcon
            className={`card-page__description-button-icon ${isOpenDescription ? 'card-page__rotate' : ''}`}
          />
        </Button>
        {isOpenDescription ? <p className="card-page__description">{currentCard.description}</p> : null}
        <Button
          title="Характеристики"
          buttonClassName="card-page__description-button card-page__specification-button"
          titleClassName="card-page__description-button-title"
          onClick={toggleSpecificationOpen}
        >
          <ArrowTriangleIcon
            className={`card-page__description-button-icon ${isOpenSpecification ? 'card-page__rotate' : ''}`}
          />
        </Button>
        {isOpenSpecification ? (
          <div className="card-page__card-info card-page__card-info_specification">
            <p className="card-page__card-text">
              {`Назначение: `}
              <span className="card__text-bold">{currentCard.manufacturer}</span>
            </p>
            <p className="card-page__card-text">
              {`Тип: `}
              <span className="card-page__card-text-bold">{currentCard.brand}</span>
            </p>
            <p className="card-page__card-text">
              {`Производитель: `}
              <span className="card-page__card-text-bold">{currentCard.manufacturer}</span>
            </p>
            <p className="card-page__card-text">
              {`Бренд: `}
              <span className="card-page__card-text-bold">{currentCard.brand}</span>
            </p>
            <p className="card-page__card-text">
              {`Артикул: `}
              <span className="card-page__card-text-bold">{currentCard.barcode.slice(0, 6)}</span>
            </p>
            <p className="card-page__card-text">
              {`Штрихкод: `}
              <span className="card-page__card-text-bold">{currentCard.barcode}</span>
            </p>
            <p className="card-page__card-text">
              {`Вес: `}
              <span className="card-page__card-text-bold">{`${currentCard.dimension} ${currentCard.dimensionType}`}</span>
            </p>
            <p className="card-page__card-text">
              {`Объем: `}
              <span className="card-page__card-text-bold">{`${currentCard.dimension} ${currentCard.dimensionType}`}</span>
            </p>
            <p className="card-page__card-text">
              {`Кол-во в коробке: `}
              <span className="card-page__card-text-bold">{`${currentCard.dimension} ${currentCard.dimensionType}`}</span>
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
});

export default CardPage;
