import { render } from '@testing-library/react';

import NavCryptoButton from './nav-crypto-button';

describe('NavCryptoButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavCryptoButton />);
    expect(baseElement).toBeTruthy();
  });
});
