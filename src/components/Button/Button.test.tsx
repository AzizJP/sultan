import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';

describe('Button', () => {
  test('Button renders', () => {
    const {getByRole} = render(<Button buttonClassName="test" />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  test('Button snapshot', () => {
    const button = render(<Button buttonClassName="test" />);

    expect(button).toMatchSnapshot();
  });
});
