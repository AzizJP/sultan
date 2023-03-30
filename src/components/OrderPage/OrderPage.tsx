import {FC, memo} from 'react';

import {useAppSelector} from '../../hooks/redux';

import {changePointToComma} from '../../utils/helpers';
import Button from '../Button/Button';

import OrderCard from './OrderCard/OrderCard';

import './OrderPage.scss';

const OrderPage: FC = memo(() => {
  const basket = useAppSelector(state => state.basketReducer.basket);
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

  return (
    <section className="order-page">
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
        <Button title="Оформить заказ" buttonClassName="order-page__button" titleClassName="order-page__button-title" />
      </div>
    </section>
  );
});

export default OrderPage;
