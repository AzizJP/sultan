import {FC, memo, useCallback, useState} from 'react';

import {ReactComponent as ArrowTriangleIcon} from '../../../../images/arrow-triangle.svg';

import Button from '../../../Button/Button';

import {SortProps} from './Sort.types';
import SortPopup from './SortPopup/SortPopup';

import './Sort.scss';

const Sort: FC<SortProps> = memo(({sortType}) => {
  const [show, setShow] = useState(false);

  const togglePopupOpen = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <div className="sort">
      <h4 className="sort__title">Сортировка:</h4>
      <Button
        title={sortType || 'Название'}
        buttonClassName="sort__button"
        titleClassName="sort__button-title"
        onClick={togglePopupOpen}
      >
        <ArrowTriangleIcon className={`sort__button-icon ${show && 'sort__button-icon_rotate'}`} />
      </Button>
      {show && <SortPopup />}
    </div>
  );
});

export default Sort;
