import {FC, memo} from 'react';

import {useAppSelector} from '../../hooks/redux';

import Card from '../Card/Card';
import {CardTypes} from '../Card/Card.types';

import './Cards.scss';

const Cards: FC = memo(() => {
  const cards = useAppSelector(state => state.cardsReducer.cards);

  return (
    <section className="cards">
      {cards.map((card: CardTypes) => (
        <Card key={card.barcode} card={card} />
      ))}
    </section>
  );
});

export default Cards;
