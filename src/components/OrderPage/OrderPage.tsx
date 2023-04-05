import {FC, memo, useCallback, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {setBasket} from '../../store/reducers/basketSlice';
import {setIsPopupOpen} from '../../store/reducers/popupSlice';

import {changePointToComma} from '../../utils/helpers';

import Button from '../Button/Button';
import Popup from '../Popup/Popup';

import OrderCard from './OrderCard/OrderCard';

import './OrderPage.scss';

const OrderPage: FC = memo(() => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(state => state.basket.basket);
  const isPopupOpen = useAppSelector(state => state.popup.isPopupOpen);

  const sum = basket.reduce((acc, item) => acc + item.price, 0).toFixed(1);

  const sortedBasket = basket
    .reduce((acc, card) => {
      const notFindDublicate = !acc.find(i => i.barcode === card.barcode);
      if (notFindDublicate) {
        acc.push(card);
      }
      return acc;
    }, [])
    .sort((a, b) => a.barcode - b.barcode);

  const handlePopupClose = useCallback(() => {
    dispatch(setIsPopupOpen(false));
  }, [dispatch]);

  const handlePopupOpen = useCallback(() => {
    dispatch(setIsPopupOpen(true));
  }, [dispatch]);

  const handleOrder = useCallback(() => {
    dispatch(setBasket([]));
    handlePopupOpen();
  }, [dispatch, handlePopupOpen]);

  useEffect(() => {
    const closeByEscape = (evt: {key: string}) => {
      if (evt.key === 'Escape') {
        handlePopupClose();
      }
    };
    if (isPopupOpen) {
      document.addEventListener('keydown', closeByEscape);
    } else {
      document.removeEventListener('keydown', closeByEscape);
    }
  }, [isPopupOpen, handlePopupClose]);

  return (
    <section className="order-page">
      {isPopupOpen && <Popup onClose={handlePopupClose} />}
      <h1 className="order-page__title">Корзина</h1>
      <div className="order-page__cards">
        {sortedBasket.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          sortedBasket.map(card => <OrderCard key={card.barcode} card={card} />)
        )}
      </div>
      <div className="order-page__ordering">
        <p className="order-page__sum">{`${changePointToComma(sum)} ₸`}</p>
        <Button
          title="Оформить заказ"
          buttonClassName="order-page__button"
          titleClassName="order-page__button-title"
          onClick={handleOrder}
        />
      </div>
    </section>
  );
});

export default OrderPage;
