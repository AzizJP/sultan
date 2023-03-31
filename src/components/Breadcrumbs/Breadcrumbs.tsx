import {FC, memo} from 'react';
import {Link, useLocation} from 'react-router-dom';

import './Breadcrumbs.scss';

interface BreadcrumbsProps {
  cardName: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = memo(({cardName}) => {
  const location = useLocation();

  return (
    <nav className="breadcrumbs">
      <Link to="/" className="breadcrumbs__title">
        Главная
      </Link>
      {location.pathname === '/' ? (
        <Link to="/" className="breadcrumbs__title">
          Косметика и гигиена
        </Link>
      ) : location.pathname === '/order' ? (
        <Link to="/order" className="breadcrumbs__title">
          Корзина
        </Link>
      ) : (
        <>
          <Link to="/" className="breadcrumbs__title">
            Каталог
          </Link>
          <p className="breadcrumbs__title">{cardName}</p>
        </>
      )}
    </nav>
  );
});

export default Breadcrumbs;
