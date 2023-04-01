import {FC, memo} from 'react';

import {useAppSelector} from '../../../hooks/redux';

import Sidebar from '../Sidebar/Sidebar';

import FilterButton from './FilterButton/FilterButton';
import {FILTER} from './FilterButton/FilterButton.types';
import Sort from './Sort/Sort';

import {SortFilterSectionProps} from './SortFilterSection.types';

import './SortFilterSection.scss';

const SortFilterSection: FC<SortFilterSectionProps> = memo(({activeFilter, isDesktop}) => {
  const currentSortType = useAppSelector(state => state.currentSortType.currentSortType);

  return (
    <div className="sort-filter-section">
      {isDesktop ? (
        <>
          <div className="sort-filter__title-wrapper">
            <h1 className="sort-filter__title">Косметика и гигиена</h1>
            <Sort sortType={currentSortType} />
          </div>
          <div className="sort-filter__filter-buttons">
            {Object.keys(FILTER).map((key: keyof typeof FILTER) => (
              <FilterButton key={key} enumKey={key} active={key === activeFilter} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="sort-filter__title-wrapper">
            <h1 className="sort-filter__title">Косметика и гигиена</h1>
            <Sidebar />
          </div>
          <div className="sort-filter__filter-buttons">
            {Object.keys(FILTER).map((key: keyof typeof FILTER) => (
              <FilterButton key={key} enumKey={key} active={key === activeFilter} />
            ))}
          </div>
          <Sort sortType={currentSortType} />
        </>
      )}
    </div>
  );
});

export default SortFilterSection;
