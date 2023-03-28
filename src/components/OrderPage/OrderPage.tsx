import {FC, memo} from 'react';
import {Link} from 'react-router-dom';

import './OrderPage.scss';

const OrderPage: FC = memo(() => {
  return (
    <main className="main">
      OrderPage
      <Link to="/">Catalog</Link>
    </main>
  );
});

export default OrderPage;
