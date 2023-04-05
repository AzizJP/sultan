import {FC, memo, useCallback} from 'react';

import {useAppDispatch} from '../../../../hooks/redux';
import {setActiveFilter} from '../../../../store/reducers/activeFilterSlice';

import {FILTER, FilterButtonProps} from './FilterButton.types';

import './FilterButton.scss';

const FilterButton: FC<FilterButtonProps> = memo(({active, enumKey, className}) => {
  const dispatch = useAppDispatch();

  const filter = useCallback(() => {
    const currentFilter = active ? '' : enumKey;
    dispatch(setActiveFilter({key: 'activeType', value: currentFilter}));
    localStorage.setItem('activeType', JSON.stringify(currentFilter));
  }, [active, dispatch, enumKey]);

  return (
    <button onClick={filter} className={`filter-button ${active && 'filter-button_active'} ${className}`}>
      {FILTER[enumKey]}
    </button>
  );
});

export default FilterButton;
