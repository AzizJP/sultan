import {FC, memo} from 'react';

import {ReactComponent as ArrowIcon} from '../../../images/arrow.svg';
import {ReactComponent as DowndloadIcon} from '../../../images/footer-download.svg';
import {ReactComponent as LogoIcon} from '../../../images/footer-logo.svg';
import {ReactComponent as MastercardIcon} from '../../../images/mastercard-logo.svg';
import {ReactComponent as TelegramIcon} from '../../../images/telegram-logo.svg';
import {ReactComponent as VisaIcon} from '../../../images/visa-logo.svg';
import {ReactComponent as WhatsappIcon} from '../../../images/whatsapp-logo.svg';

import Button from '../../Button/Button';
import Form from '../../Form/Form';

import './PhoneFooter.scss';

const PhoneFooter: FC = memo(() => {
  return (
    <>
      <section className="footer-phone__top-section">
        <div className="footer-phone__logo-group">
          <LogoIcon />
          <Button title="Прайс-лист" width="149px" height="40px" gap="5px">
            <DowndloadIcon />
          </Button>
        </div>
        <div className="footer-phone__description">
          <p className="footer-phone__text">
            Компания «Султан» — снабжаем розничные магазины товарами &quot;под ключ&quot; в Кокчетаве и Акмолинской
            области
          </p>
          <div className="footer-phone__email">
            <p className="footer-phone__email-text">Подпишись на скидки и акции</p>
            <Form placeholder="Введите ваш E-mail" width="270px" height="39px" backgroundColor="#ffffff">
              <ArrowIcon />
            </Form>
          </div>
        </div>
      </section>
      <section className="footer-phone__middle-section">
        <div className="footer-phone__links">
          <h2 className="footer-phone__title">Меню сайта:</h2>
          <p className="footer-phone__text">О компании</p>
          <p className="footer-phone__text">Доставка и оплата</p>
          <p className="footer-phone__text">Возврат</p>
          <p className="footer-phone__text">Контакты</p>
        </div>
        <div className="footer-phone__links">
          <h2 className="footer-phone__title">Категории:</h2>
          <p className="footer-phone__text">Бытовая химия</p>
          <p className="footer-phone__text">Косметика и гигиена</p>
          <p className="footer-phone__text">Товары для дома</p>
          <p className="footer-phone__text">Товары для детей и мам</p>
          <p className="footer-phone__text">Посуда</p>
        </div>
      </section>
      <section className="footer-phone__bottom-section">
        <h2 className="footer-phone__title">Контакты:</h2>
        <address className="footer-phone__address">
          <div className="footer-phone__contacts">
            <div className="phone-number__section phone-number__section_footer">
              <p className="phone-number__title phone-number__title_footer">+7 (777) 490-00-91</p>
              <p className="phone-number__subtitle phone-number__subtitle_footer">время работы: 9:00-20:00</p>
              <button type="button" className="phone-number__button phone-number__button_footer">
                Заказать звонок
              </button>
            </div>
            <div className="address__text-group address__text-group_footer">
              <p className="address__title">opt.sultan@mail.ru</p>
              <p className="address__subtitle address__subtitle_footer">На связи в любое время</p>
            </div>
          </div>
          <div className="footer-phone__messengers">
            <h4 className="footer-phone__messengers-title">Связь в мессенджерах:</h4>
            <div className="footer-phone__messengers-logos">
              <a href="https://www.whatsapp.com/">
                <WhatsappIcon className="footer-phone__messengers-logo" />
              </a>
              <a href="https://web.telegram.org/">
                <TelegramIcon className="footer-phone__messengers-logo" />
              </a>
            </div>
          </div>
        </address>
        <div className="footer-phone__bank-cards">
          <VisaIcon />
          <MastercardIcon />
        </div>
      </section>
    </>
  );
});

export default PhoneFooter;
