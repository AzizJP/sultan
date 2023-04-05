import {FC, memo} from 'react';

import {useAppSelector} from '../../../hooks/redux';

import Card from './Card/Card';
import {CardTypes} from './Card/Card.types';

import {ITEMS_IN_PAGE} from './Cards.constants';

import {CardsProps} from './Cards.types';
import Pagination from './Pagination/Pagination';

import './Cards.scss';

const Cards: FC<CardsProps> = memo(({copyCards}) => {
  const page = useAppSelector(state => state.page.page);

  const pagesAmount = Math.ceil(copyCards.length / ITEMS_IN_PAGE);
  const lastIndex = ITEMS_IN_PAGE * page;
  const firstIndex = lastIndex - ITEMS_IN_PAGE;
  const initialCards = copyCards.slice(firstIndex, lastIndex);

  return (
    <section className="cards">
      <div className="cards__wrapper">
        {initialCards.map((card: CardTypes) => (
          <Card key={card.barcode} card={card} />
        ))}
      </div>
      <Pagination pagesAmount={pagesAmount} />
      <p className="cards__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis
        iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque
        consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
      </p>
    </section>
  );
});

export default Cards;
