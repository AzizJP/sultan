import {FC, memo} from 'react';

import Cards from '../Cards/Cards';
import Sidebar from '../Sidebar/Sidebar';

import './CatalogPage.scss';

const CatalogPage: FC = memo(() => {
  return (
    <section className="catalog-page">
      <Sidebar />
      <Cards />
    </section>
  );
});

export default CatalogPage;
