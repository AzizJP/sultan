import {FC, memo} from 'react';

import {ReactComponent as CloseIcon} from '../../images/close.svg';
import {ReactComponent as DoubleCheckIcon} from '../../images/double-check.svg';

import {PopupProps} from './Popup.types';

import './Popup.scss';

const Popup: FC<PopupProps> = memo(({onClose}) => {
  return (
    <section data-testid="order-popup" className="popup__overlay">
      <div className="popup">
        <button className="popup__close" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="popup__image">
          <DoubleCheckIcon />
        </div>
        <h2 className="popup__title">Спасибо за заказ</h2>
        <p className="popup__text">Наш менеджер свяжется с вами в ближайшее время</p>
      </div>
    </section>
  );
});

export default Popup;
