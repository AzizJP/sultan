import {FC, memo} from 'react';

import Sidebar from '../Sidebar/Sidebar';

import FilterButton from './FilterButton/FilterButton';
import {FILTER} from './FilterButton/FilterButton.types';

import Sort from './Sort/Sort';

import {SortFilterSectionProps} from './SortFilterSection.types';

import './SortFilterSection.scss';

const SortFilterSection: FC<SortFilterSectionProps> = memo(({activeType, isDesktop, filteredCards}) => {
  return (
    <div className="sort-filter-section">
      {isDesktop ? (
        <>
          <div className="sort-filter__title-wrapper">
            <h1 className="sort-filter__title">Косметика и гигиена</h1>
            <Sort />
          </div>
          <div className="sort-filter__filter-buttons">
            {Object.keys(FILTER).map((key: keyof typeof FILTER) => (
              <FilterButton key={key} enumKey={key} active={key === activeType} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="sort-filter__title-wrapper">
            <h1 className="sort-filter__title">Косметика и гигиена</h1>
            <Sidebar filteredCards={filteredCards} />
          </div>
          <div className="sort-filter__filter-buttons">
            {Object.keys(FILTER).map((key: keyof typeof FILTER) => (
              <FilterButton key={key} enumKey={key} active={key === activeType} />
            ))}
          </div>
          <Sort />
        </>
      )}
    </div>
  );
});

export default SortFilterSection;
