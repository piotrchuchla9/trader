import { render } from '@testing-library/react';

import NavCurrency from './nav-currency';

describe('NavCurrency', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavCurrency />);
    expect(baseElement).toBeTruthy();
  });
});
