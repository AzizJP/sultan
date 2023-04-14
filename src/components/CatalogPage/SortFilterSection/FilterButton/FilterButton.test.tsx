import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';

import {Provider} from 'react-redux';

import * as reduxHooks from '../../../../hooks/redux';

import {setupStore} from '../../../../store/store';

import FilterButton from './FilterButton';

const mockedDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');

describe('Form', () => {
  test('Should dispatch actions', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const {getByTestId} = render(
      <Provider store={setupStore()}>
        <FilterButton active enumKey="муж" />
      </Provider>,
    );

    fireEvent.click(getByTestId('filter-button'));

    expect(dispatch).toHaveBeenCalled();
  });

  test('Should change background color after click', () => {
    const {getByRole} = render(
      <Provider store={setupStore()}>
        <FilterButton active enumKey="муж" />
      </Provider>,
    );
    expect(getByRole('button')).toHaveTextContent('Для мужчин');
  });
});
