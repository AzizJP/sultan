import {FC, memo} from 'react';
import {Link} from 'react-router-dom';

import {useAppSelector} from '../../../hooks/redux';

import {ReactComponent as CatalogIcon} from '../../../images/catalog-white.svg';
import {ReactComponent as BasketIcon} from '../../../images/desktop-basket.svg';
import {ReactComponent as LogoIcon} from '../../../images/desktop-logo.svg';
import {ReactComponent as DownloadIcon} from '../../../images/download.svg';
import {ReactComponent as LocationIcon} from '../../../images/location.svg';
import {ReactComponent as LoupeIcon} from '../../../images/loupe-white.svg';
import {ReactComponent as MailIcon} from '../../../images/mail.svg';

import './DesktopHeader.scss';

const DesktopHeader: FC = memo(() => {
  const amount = useAppSelector(state => state.basketReducer.amount);
  const sum = useAppSelector(state => state.basketReducer.sum);

  return (
    <>
      <section className="header-desktop__section">
        <div className="header-desktop__wrapper">
          <address className="address">
            <div className="address__section">
              <LocationIcon className="address__icon" />
              <div className="address__text-group">
                <p className="address__title">г. Кокчетав, ул. Ж. Ташенова 129Б</p>
                <p className="address__subtitle">(Рынок Восточный)</p>
              </div>
            </div>
            <div className="address__section">
              <MailIcon className="address__icon" />
              <div className="address__text-group">
                <p className="address__title">opt.sultan@mail.ru</p>
                <p className="address__subtitle">На связи в любое время</p>
              </div>
            </div>
          </address>
          <ul className="info">
            <li className="info__text">О компании</li>
            <li className="info__text">Доставка и оплата</li>
            <li className="info__text">Возврат</li>
            <li className="info__text">Контакты</li>
          </ul>
        </div>
      </section>
      <section className="header-desktop__section">
        <div className="header-desktop__wrapper header-desktop__wrapper_bottom">
          <LogoIcon className="header-desktop__logo" />
          <div className="header-desktop__search-group">
            <button type="button" className="header-desktop__button">
              <p className="header-desktop__button-text">Каталог</p>
              <CatalogIcon className="header-desktop__button-icon" />
            </button>
            <form className="header-desktop__search">
              <input type="text" placeholder="Поиск..." className="header-desktop__search-input" />
              <button type="submit" className="header-desktop__search-button">
                <LoupeIcon className="header-desktop__search-icon" />
              </button>
            </form>
          </div>
          <div className="header-desktop__info-group">
            <div className="phone-number">
              <div className="phone-number__section">
                <p className="phone-number__title">+7 (777) 490-00-91</p>
                <p className="phone-number__subtitle">время работы: 9:00-20:00</p>
                <button type="button" className="phone-number__button">
                  Заказать звонок
                </button>
              </div>
              <span className="phone-number__photo" />
            </div>
            <button type="button" className="header-desktop__button header-desktop__button_price">
              <p className="header-desktop__button-text">Прайс-лист</p>
              <DownloadIcon className="header-desktop__button-icon" />
            </button>
            <div className="basket">
              <Link to="/basket" className="basket__link">
                <BasketIcon className="basket__icon" />
                <span className="basket__amount">{amount}</span>
              </Link>
              <div className="basket__text-section">
                <p className="basket__title">Корзина</p>
                <p className="basket__sum">{`${sum} ₸`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default DesktopHeader;
