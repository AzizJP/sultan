import {FC, memo} from 'react';

import {useAppSelector} from '../../../hooks/redux';

import Card from '../../Card/Card';
import {CardTypes} from '../../Card/Card.types';

import {ITEMS_IN_PAGE} from './Cards.constants';
import Slider from './Slider/Slider';

import './Cards.scss';

const Cards: FC = memo(() => {
  const cards = useAppSelector(state => state.cardsReducer.cards);
  const page = useAppSelector(state => state.pageReducer.page);

  const pagesAmount = Math.ceil(cards.length / ITEMS_IN_PAGE);
  const lastIndex = ITEMS_IN_PAGE * page;
  const firstIndex = lastIndex - ITEMS_IN_PAGE;
  const initialCards = cards.slice(firstIndex, lastIndex);

  return (
    <section className="cards">
      <div className="cards__wrapper">
        {initialCards.map((card: CardTypes) => (
          <Card key={card.barcode} card={card} />
        ))}
      </div>
      <Slider pagesAmount={pagesAmount} />
    </section>
  );
});

export default Cards;
