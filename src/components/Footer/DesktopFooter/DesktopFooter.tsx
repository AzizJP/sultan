import {FC, memo} from 'react';

import {ReactComponent as ArrowIcon} from '../../../images/arrow.svg';
import {ReactComponent as DowndloadIcon} from '../../../images/download.svg';
import {ReactComponent as LogoIcon} from '../../../images/footer-desktop-logo.svg';
import {ReactComponent as MastercardIcon} from '../../../images/mastercard-logo.svg';
import {ReactComponent as TelegramIcon} from '../../../images/telegram-logo.svg';
import {ReactComponent as VisaIcon} from '../../../images/visa-logo.svg';
import {ReactComponent as WhatsappIcon} from '../../../images/whatsapp-logo.svg';

import Button from '../../Button/Button';
import Form from '../../Form/Form';

import './DesktopFooter.scss';

const DesktopFooter: FC = memo(() => {
  return (
    <>
      <section className="footer-desktop">
        <div className="footer-desktop__logo-group">
          <LogoIcon />
          <p className="footer-desktop__text">
            Компания «Султан» — снабжаем розничные магазины товарами &quot;под ключ&quot; в Кокчетаве и Акмолинской
            области
          </p>
          <div className="footer-desktop__email">
            <p className="footer-phone__email-text">Подпишись на скидки и акции</p>
            <Form placeholder="Введите ваш E-mail" width="262px" height="39px" backgroundColor="#ffffff">
              <ArrowIcon />
            </Form>
          </div>
        </div>
        <div className="footer-desktop__links-group">
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
          <div className="footer-phone__links">
            <h2 className="footer-phone__title">Скачать прайс-лист:</h2>
            <Button title="Прайс-лист" width="214px" height="59px" gap="12px">
              <DowndloadIcon />
            </Button>
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
          </div>
          <div className="footer-phone__contacts">
            <h2 className="footer-phone__title">Контакты:</h2>
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
            <div className="footer-phone__bank-cards">
              <VisaIcon />
              <MastercardIcon />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default DesktopFooter;
