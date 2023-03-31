import {FC, memo} from 'react';

import {useAppSelector} from '../../hooks/redux';

import Cards from './Cards/Cards';
import Sidebar from './Sidebar/Sidebar';

import './CatalogPage.scss';

const CatalogPage: FC = memo(() => {
  const isDesktop = useAppSelector(state => state.breakpointReducer.isDesktop);

  return (
    <section className="catalog-page">
      <h1 className="catalog-page__title">Косметика и гигиена</h1>
      <div className="catalog-page__main">
        {isDesktop ? <Sidebar /> : null}
        <Cards />
      </div>
    </section>
  );
});

export default CatalogPage;
