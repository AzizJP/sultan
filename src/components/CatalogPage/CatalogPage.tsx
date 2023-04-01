import {FC, memo, useMemo} from 'react';

import {useAppSelector} from '../../hooks/redux';

import Cards from './Cards/Cards';
import Sidebar from './Sidebar/Sidebar';
import SortFilterSection from './SortFilterSection/SortFilterSection';

import './CatalogPage.scss';

const CatalogPage: FC = memo(() => {
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const activeFilter = useAppSelector(state => state.activeFilter.activeFilter);
  const cards = useAppSelector(state => state.cards.cards);

  const filteredCards = useMemo(() => {
    return activeFilter ? [...cards].filter(card => card.careType.includes(activeFilter)) : cards;
  }, [activeFilter, cards]);

  return (
    <section className="catalog-page">
      <SortFilterSection activeFilter={activeFilter} isDesktop={isDesktop} />
      <div className="catalog-page__main">
        {isDesktop ? <Sidebar /> : null}
        <Cards copyCards={filteredCards} />
      </div>
    </section>
  );
});

export default CatalogPage;
