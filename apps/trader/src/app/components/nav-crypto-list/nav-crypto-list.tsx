import { List } from '@mantine/core';
import NavCryptoButton from '../nav-crypto-button/nav-crypto-button';
import styles from './nav-crypto-list.module.scss';

/* eslint-disable-next-line */
export interface NavCryptoListProps {}

export function NavCryptoList(props: NavCryptoListProps) {
  return (
    <List
      spacing="xs"
      size="lg"
      center
    >
      <NavCryptoButton cryptoId='asd123' logo='https://assets.coingecko.com/coins/images/5720/thumb/F1nTlw9I_400x400.jpg?1547041588' name='essa' ></NavCryptoButton>
    </List>
  );
}

export default NavCryptoList;
