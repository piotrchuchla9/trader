import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    defaultCurrency: 'usd',
    defaultCrypto: 'bitcoin'
});

export { useGlobalState, setGlobalState }
