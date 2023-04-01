import {FC, memo} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {useAppSelector} from '../../hooks/redux';

import './Breadcrumbs.scss';

const Breadcrumbs: FC = memo(() => {
  const location = useLocation();
  const currentCardName = useAppSelector(state => state.cardName.cardName);

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
        currentCardName && (
          <>
            <Link to="/" className="breadcrumbs__title">
              Каталог
            </Link>
            <p className="breadcrumbs__title">{currentCardName}</p>
          </>
        )
      )}
    </nav>
  );
});

export default Breadcrumbs;
