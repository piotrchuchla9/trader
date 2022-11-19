import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    currentTheme: 'dark',
    
    defaultCurrency: 'usd',
    defaultCryptoId: 'bitcoin',
    defaultCryptoName: 'Bitcoin',
});

export { useGlobalState, setGlobalState }
