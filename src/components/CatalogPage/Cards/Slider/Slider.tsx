import {FC, memo, useCallback, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';

import {ReactComponent as SliderArrowIcon} from '../../../../images/slider-arrow.svg';

import {decrementPage, incrementPage, setPage} from '../../../../store/reducers/pageSlice';

import {SliderProps} from './Slider.types';

import './Slider.scss';

const Slider: FC<SliderProps> = memo(({pagesAmount}) => {
  const dispatch = useAppDispatch();
  const [firstIndex, setFirstIndex] = useState<number>(JSON.parse(localStorage.getItem('firstIndex')) || 0);
  const page = useAppSelector(state => state.page.page);

  const sliderNumbers = [];
  for (let i = 1; i <= pagesAmount; ++i) {
    sliderNumbers.push(i);
  }

  useEffect(() => {
    if (pagesAmount === 1) {
      dispatch(setPage(1));
      localStorage.setItem('catalogPage', JSON.stringify(1));
    }
  }, [dispatch, pagesAmount]);

  const lastIndex = firstIndex + 5;
  const visibleNumbers = sliderNumbers.slice(firstIndex, lastIndex);

  const incPage = useCallback(() => {
    if (page === sliderNumbers.length) return;
    if (page === lastIndex - 1 && lastIndex <= sliderNumbers.length - 2) {
      setFirstIndex(prev => prev + 3);
      localStorage.setItem('firstIndex', JSON.stringify(firstIndex + 3));
    }
    dispatch(incrementPage(1));
    localStorage.setItem('catalogPage', JSON.stringify(page + 1));
    window.scrollTo(0, 0);
  }, [dispatch, firstIndex, lastIndex, page, sliderNumbers.length]);

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

  const onSliderButton = useCallback(
    (i: number) => {
      if (i === lastIndex && lastIndex <= sliderNumbers.length - 2) {
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
    [dispatch, firstIndex, lastIndex, sliderNumbers.length],
  );

  return (
    <section className="slider">
      <button onClick={decPage} className="slider__arrow">
        <SliderArrowIcon className="slider__arrow-icon" />
      </button>
      <div className="slider__numbers">
        {visibleNumbers.map(i => (
          <button
            className={`slider__number ${page === i ? 'slider__number_active' : ''}`}
            key={i}
            onClick={() => onSliderButton(i)}
          >
            {i}
          </button>
        ))}
      </div>
      <button onClick={incPage} className="slider__arrow">
        <SliderArrowIcon className="slider__arrow-icon slider__arrow-icon_rotate" />
      </button>
    </section>
  );
});

export default Slider;
