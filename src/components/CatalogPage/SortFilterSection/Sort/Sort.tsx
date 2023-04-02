import {FC, memo, useCallback, useEffect, useState} from 'react';

import {useAppSelector} from '../../../../hooks/redux';

import {ReactComponent as ArrowTriangleIcon} from '../../../../images/arrow-triangle.svg';

import Button from '../../../Button/Button';

import SortPopup from './SortPopup/SortPopup';
import {SortTypes} from './SortPopup/SortPopup.types';

import './Sort.scss';

const Sort: FC = memo(() => {
  const activeSort = useAppSelector(state => state.activeFilter.activeSort);
  const [sortType, setSortType] = useState(JSON.parse(localStorage.getItem('activeSort')) || activeSort);
  const [show, setShow] = useState(false);

  const handleSortTypeChange = useCallback((type: keyof typeof SortTypes) => {
    setSortType(type);
  }, []);

  const togglePopup = useCallback(() => {
    setShow(!show);
  }, [show]);

  useEffect(() => {
    const closeByEscape = (evt: {key: string}) => {
      if (evt.key === 'Escape') {
        setShow(false);
      }
    };
    if (show) {
      document.addEventListener('keydown', closeByEscape);
    } else {
      document.removeEventListener('keydown', closeByEscape);
    }
  }, [show, setShow]);

  return (
    <div className="sort">
      <h4 className="sort__title">Сортировка:</h4>
      <Button title={sortType} buttonClassName="sort__button" titleClassName="sort__button-title" onClick={togglePopup}>
        <ArrowTriangleIcon className={`sort__button-icon ${show && 'sort__button-icon_rotate'}`} />
      </Button>
      {show && <SortPopup handleSortTypeChange={handleSortTypeChange} handlePopupClose={togglePopup} />}
    </div>
  );
});

export default Sort;
