import {FC, memo, useCallback, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';

import {ReactComponent as PaginationArrowIcon} from '../../../../images/pagination-arrow.svg';

import {decrementPage, incrementPage, setPage} from '../../../../store/reducers/pageSlice';

import {PaginationProps} from './Pagination.types';

import './Pagination.scss';

const Pagination: FC<PaginationProps> = memo(({pagesAmount}) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.page.page);
  const [firstIndex, setFirstIndex] = useState<number>(JSON.parse(localStorage.getItem('firstIndex')) || 0);

  const paginationNumbers = [];
  for (let i = 1; i <= pagesAmount; ++i) {
    paginationNumbers.push(i);
  }

  useEffect(() => {
    if (pagesAmount === 1) {
      dispatch(setPage(1));
      localStorage.setItem('catalogPage', JSON.stringify(1));
    }
  }, [dispatch, pagesAmount]);

  const lastIndex = firstIndex + 5;
  const visibleNumbers = paginationNumbers.slice(firstIndex, lastIndex);

  const incPage = useCallback(() => {
    if (page === paginationNumbers.length) return;
    if (page === lastIndex - 1 && lastIndex <= paginationNumbers.length - 2) {
      setFirstIndex(prev => prev + 3);
      localStorage.setItem('firstIndex', JSON.stringify(firstIndex + 3));
    }
    dispatch(incrementPage(1));
    localStorage.setItem('catalogPage', JSON.stringify(page + 1));
    window.scrollTo(0, 0);
  }, [dispatch, firstIndex, lastIndex, page, paginationNumbers.length]);

  const decPage = useCallback(() => {
    if (page === 1) return;
    if (page === firstIndex + 2 && firstIndex >= 3) {
      setFirstIndex(prev => prev - 3);
      localStorage.setItem('firstIndex', JSON.stringify(firstIndex - 3));
    }
    dispatch(decrementPage(1));
    localStorage.setItem('catalogPage', JSON.stringify(page - 1));
    window.scrollTo(0, 0);
  }, [dispatch, firstIndex, page]);

  const onPaginationButton = useCallback(
    (i: number) => {
      if (i === lastIndex && lastIndex <= paginationNumbers.length - 2) {
        setFirstIndex(prev => prev + 3);
        localStorage.setItem('firstIndex', JSON.stringify(firstIndex + 3));
      }
      if (i === firstIndex + 1 && firstIndex >= 3) {
        setFirstIndex(prev => prev - 3);
        localStorage.setItem('firstIndex', JSON.stringify(firstIndex - 3));
      }
      dispatch(setPage(i));
      localStorage.setItem('catalogPage', JSON.stringify(i));
      window.scrollTo(0, 0);
    },
    [dispatch, firstIndex, lastIndex, paginationNumbers.length],
  );

  return (
    <section className="pagination">
      <button onClick={decPage} className="pagination__arrow">
        <PaginationArrowIcon className="pagination__arrow-icon" />
      </button>
      <div className="pagination__numbers">
        {visibleNumbers.map(i => (
          <button
            className={`pagination__number ${page === i ? 'pagination__number_active' : ''}`}
            key={i}
            onClick={() => onPaginationButton(i)}
          >
            {i}
          </button>
        ))}
      </div>
      <button onClick={incPage} className="pagination__arrow">
        <PaginationArrowIcon className="pagination__arrow-icon pagination__arrow-icon_rotate" />
      </button>
    </section>
  );
});

export default Pagination;
