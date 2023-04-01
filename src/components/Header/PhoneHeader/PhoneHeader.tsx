import {FC, memo} from 'react';
import {Link} from 'react-router-dom';

import {useAppSelector} from '../../../hooks/redux';

import {ReactComponent as BusketIcon} from '../../../images/basket.svg';
import {ReactComponent as CatalogIcon} from '../../../images/catalog.svg';
import {ReactComponent as LogoIcon} from '../../../images/logo.svg';
import {ReactComponent as LoupeIcon} from '../../../images/loupe.svg';
import {ReactComponent as MenuIcon} from '../../../images/menu.svg';

import './PhoneHeader.scss';

const PhoneHeader: FC = memo(() => {
  const amount = useAppSelector(state => state.basket.basket.length);
  return (
    <>
      <section className="header-phone__top-section">
        <button type="button" className="header-phone__menu">
          <MenuIcon className="header-phone__menu-icon" />
        </button>
        <LogoIcon className="header-phone__logo" />
        <Link to="/order" className="header-phone__busket">
          <span className="header-phone__busket-items-amount">{amount}</span>
          <BusketIcon className="header-phone__busket-icon" />
        </Link>
      </section>
      <section className="header-phone__bottom-section">
        <button type="button" className="header-phone__button header-phone__button_catalog">
          <CatalogIcon className="header-phone__button-icon" />
          <h4 className="header-phone__button-title">Каталог</h4>
        </button>
        <button type="button" className="header-phone__button header-phone__button_search">
          <LoupeIcon className="header-phone__button-icon" />
          <h4 className="header-phone__button-title">Поиск</h4>
        </button>
      </section>
    </>
  );
});

export default PhoneHeader;
