import {FC, memo} from 'react';
import {Link} from 'react-router-dom';

import Goods from '../../Data/Goods.json';
import Card from '../Card/Card';

import './CatalogPage.scss';

const CatalogPage: FC = memo(() => {
  const arr = Goods;
  return (
    <div className="main">
      <Link to="/order">Basket</Link>
      {arr.map(item => (
        <Card key={item.barcode} card={item} />
      ))}
    </div>
  );
});

export default CatalogPage;
