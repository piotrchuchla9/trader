import { render } from '@testing-library/react';

import MainInfo from './main-info';

describe('MainInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainInfo />);
    expect(baseElement).toBeTruthy();
  });
});
