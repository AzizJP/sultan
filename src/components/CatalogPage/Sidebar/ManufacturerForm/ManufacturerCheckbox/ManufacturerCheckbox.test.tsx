import {fireEvent, render} from '@testing-library/react';

import {Provider} from 'react-redux';

import * as actions from '../../../../../store/reducers/checkboxValueSlice';

import {setupStore} from '../../../../../store/store';

import {CardTypes} from '../../../Cards/Card/Card.types';

import ManufacturerCheckbox from './ManufacturerCheckbox';

const cards: Array<CardTypes> = [
  {
    url: 'test',
    name: 'test',
    dimensionType: 'test',
    dimension: 'test',
    barcode: 'test',
    manufacturer: 'Россия',
    brand: 'test',
    description: 'test',
    price: 100,
    careType: [],
  },
  {
    url: 'test2',
    name: 'test2',
    dimensionType: 'test2',
    dimension: 'test2',
    barcode: 'test2',
    manufacturer: 'Китай',
    brand: 'test2',
    description: 'test2',
    price: 200,
    careType: [],
  },
];

describe('ManufacturerCheckbox', () => {
  test('Should dispatch actions', () => {
    const mockedToggleComplete = jest.spyOn(actions, 'setCheckboxValues');

    const {getByRole} = render(
      <Provider store={setupStore()}>
        <ManufacturerCheckbox manufacturer="Россия" filteredCards={cards} />
      </Provider>,
    );

    fireEvent.click(getByRole('checkbox'));

    expect(mockedToggleComplete).toHaveBeenCalledWith(['Россия']);

    fireEvent.click(getByRole('checkbox'));

    expect(mockedToggleComplete).toHaveBeenCalledWith([]);
  });
});
