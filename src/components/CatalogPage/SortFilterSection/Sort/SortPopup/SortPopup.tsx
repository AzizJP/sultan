import {FC, memo, useCallback} from 'react';

import {useAppDispatch} from '../../../../../hooks/redux';
import {setActiveFilter} from '../../../../../store/reducers/activeFilterSlice';

import {SortPopupProps, SortTypes} from './SortPopup.types';

import './SortPopup.scss';

const SortPopup: FC<SortPopupProps> = memo(({handleSortTypeChange, handlePopupClose}) => {
  const dispatch = useAppDispatch();

  const sort = useCallback(
    (type: keyof typeof SortTypes) => {
      handleSortTypeChange(type);
      handlePopupClose();
      localStorage.setItem('activeSort', JSON.stringify(type));
      dispatch(setActiveFilter({key: 'activeSort', value: type}));
    },
    [dispatch, handlePopupClose, handleSortTypeChange],
  );

  return (
    <div className="sort-popup">
      {Object.keys(SortTypes).map((type: keyof typeof SortTypes) => (
        <button key={type} className="sort-popup__button" onClick={() => sort(type)}>
          {type}
        </button>
      ))}
    </div>
  );
});

export default SortPopup;
