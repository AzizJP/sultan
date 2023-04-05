import {FC, memo, useMemo} from 'react';

import {useAppSelector} from '../../hooks/redux';

import {CardTypes} from './Cards/Card/Card.types';

import Cards from './Cards/Cards';
import Sidebar from './Sidebar/Sidebar';
import SortFilterSection from './SortFilterSection/SortFilterSection';

import './CatalogPage.scss';

const CatalogPage: FC = memo(() => {
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const activeType = useAppSelector(state => state.activeFilter.activeType);
  const activeSort = useAppSelector(state => state.activeFilter.activeSort);
  const activePrice = useAppSelector(state => state.activeFilter.activePrice);
  const activeManufacturer = useAppSelector(state => state.activeFilter.activeManufacturer);
  const cards = useAppSelector(state => state.cards.cards);

  const filteredCards = useMemo(() => {
    let copyCards = [...cards].filter(card => card.price >= activePrice[0] && card.price <= activePrice[1]);

    if (activeManufacturer.length > 0) {
      const newArr: Array<CardTypes> = [];
      activeManufacturer.map(value => {
        copyCards.map(card => {
          if (card.manufacturer === value) newArr.push(card);
        });
      });
      copyCards = newArr;
    }
    if (activeSort === 'Цена по возрастанию') {
      copyCards.sort((firstCard, secondCard) => firstCard.price - secondCard.price);
    }
    if (activeSort === 'Цена по убыванию') {
      copyCards.sort((firstCard, secondCard) => secondCard.price - firstCard.price);
    }
    if (activeSort === 'Название по возрастанию') {
      copyCards.sort((firstCard, secondCard) => firstCard.name.localeCompare(secondCard.name));
    }
    if (activeSort === 'Название по убыванию') {
      copyCards.sort((firstCard, secondCard) => secondCard.name.localeCompare(firstCard.name));
    }
    if (activeType) {
      return copyCards.filter(card => card.careType.includes(activeType));
    }
    return copyCards;
  }, [activeManufacturer, activePrice, activeSort, activeType, cards]);

  return (
    <section className="catalog-page">
      <SortFilterSection activeType={activeType} isDesktop={isDesktop} filteredCards={filteredCards} />
      <div className="catalog-page__main">
        {isDesktop && <Sidebar filteredCards={filteredCards} />}
        <Cards copyCards={filteredCards} />
      </div>
    </section>
  );
});

export default CatalogPage;
