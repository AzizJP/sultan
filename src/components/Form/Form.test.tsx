import {render} from '@testing-library/react';

import Form from './Form';

const initValue = 'test-value';

describe('Form', () => {
  test('Should display the passed value', () => {
    const {getByDisplayValue} = render(<Form placeholder="test" formClassName="test-form" value={initValue} />);

    const input = getByDisplayValue(initValue);

    expect(input);
  });
});
