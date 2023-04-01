import {FC, memo} from 'react';

import {SortType} from '../../../../../types/types';

import {SortTypes} from './SortPopup.types';

import './SortPopup.scss';

const SortPopup: FC = memo(() => {
  return (
    <div className="sort-popup">
      {Object.keys(SortTypes).map((type: SortType['currentSortType']) => (
        <button key={type} className="sort-popup__button">
          {type}
        </button>
      ))}
    </div>
  );
});

export default SortPopup;
