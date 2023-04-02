import {FC, memo} from 'react';

import './PriceForm.scss';

const PriceForm: FC = memo(() => {
  return (
    <div className="sidebar-price">
      <h5 className="sidebar-price__title">
        Цена <span className="sidebar-price__title-dimension">₸</span>
      </h5>
      <form className="sidebar-price__form">
        <input type="text" className="sidebar-price__input" placeholder="0" />
        <span>-</span>
        <input type="text" className="sidebar-price__input" placeholder="10 000" />
      </form>
    </div>
  );
});

export default PriceForm;
