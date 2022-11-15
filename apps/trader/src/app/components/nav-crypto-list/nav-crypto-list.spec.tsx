import { render } from '@testing-library/react';

import NavCryptoList from './nav-crypto-list';

describe('NavCryptoList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavCryptoList />);
    expect(baseElement).toBeTruthy();
  });
});
