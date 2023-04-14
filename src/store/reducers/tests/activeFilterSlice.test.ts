import activeFilterSlice, {setActiveFilter} from '../activeFilterSlice';

describe('activeFilterSlice', () => {
  test('Should change filter type', () => {
    expect(
      activeFilterSlice(
        {
          activeType: '',
          activePrice: [0, 10000],
          activeSort: '',
          activeManufacturer: [],
        },
        setActiveFilter({key: 'activeType', value: 'муж'}),
      ),
    ).toEqual({
      activeType: 'муж',
      activePrice: [0, 10000],
      activeSort: '',
      activeManufacturer: [],
    });
  });
  test('Should change price value', () => {
    expect(
      activeFilterSlice(
        {
          activeType: '',
          activePrice: [0, 10000],
          activeSort: '',
          activeManufacturer: [],
        },
        setActiveFilter({key: 'activePrice', value: [100, 300]}),
      ),
    ).toEqual({
      activeType: '',
      activePrice: [100, 300],
      activeSort: '',
      activeManufacturer: [],
    });
  });
  test('Should change sort type', () => {
    expect(
      activeFilterSlice(
        {
          activeType: '',
          activePrice: [0, 10000],
          activeSort: 'Цена по возрастанию',
          activeManufacturer: [],
        },
        setActiveFilter({key: 'activeSort', value: 'Название по убыванию'}),
      ),
    ).toEqual({
      activeType: '',
      activePrice: [0, 10000],
      activeSort: 'Название по убыванию',
      activeManufacturer: [],
    });
  });
  test('Should change manufacturer', () => {
    expect(
      activeFilterSlice(
        {
          activeType: '',
          activePrice: [0, 10000],
          activeSort: '',
          activeManufacturer: [],
        },
        setActiveFilter({key: 'activeManufacturer', value: ['Россия', 'Китай', 'Южная Корея']}),
      ),
    ).toEqual({
      activeType: '',
      activePrice: [0, 10000],
      activeSort: '',
      activeManufacturer: ['Россия', 'Китай', 'Южная Корея'],
    });
  });
});
