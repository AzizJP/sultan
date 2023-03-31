import {FC, memo, useCallback} from 'react';

import {useAppDispatch, useAppSelector} from '../../../../hooks/redux';

import {ReactComponent as SliderArrowIcon} from '../../../../images/slider-arrow.svg';

import {decrementPage, incrementPage, setPage} from '../../../../store/reducers/pageSlice';

import {SliderProps} from './Slider.types';

import './Slider.scss';

const Slider: FC<SliderProps> = memo(({pagesAmount}) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.pageReducer.page);
  const sliderNumbers = [];

  for (let i = 1; i <= pagesAmount; ++i) {
    sliderNumbers.push(i);
  }

  const incPage = useCallback(() => {
    dispatch(incrementPage(1));
    localStorage.setItem('catalogPage', JSON.stringify(page + 1));
  }, [dispatch, page]);

  const decPage = useCallback(() => {
    if (page === 1) return;
    dispatch(decrementPage(1));
    localStorage.setItem('catalogPage', JSON.stringify(page - 1));
  }, [dispatch, page]);

  const onSliderButton = useCallback(
    (i: number) => {
      dispatch(setPage(i));
      localStorage.setItem('catalogPage', JSON.stringify(i));
    },
    [dispatch],
  );

  return (
    <section className="slider">
      <button onClick={decPage} className="slider__arrow">
        <SliderArrowIcon className="slider__arrow-icon" />
      </button>
      <div className="slider__numbers">
        {sliderNumbers.map(i => (
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
