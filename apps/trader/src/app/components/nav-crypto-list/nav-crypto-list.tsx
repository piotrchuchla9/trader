import { List, ScrollArea } from '@mantine/core';
import NavCryptoButton from '../nav-crypto-button/nav-crypto-button';
import styles from './nav-crypto-list.module.scss';
import { useGlobalState } from '../../config/states'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { CoinList } from '../../config/api';

/* eslint-disable-next-line */
export interface NavCryptoListProps { }

export function NavCryptoList(props: NavCryptoListProps) {

  const [post, setPost] = useState<any[]>([]);
  const currency = useGlobalState("defaultCurrency");

  const cryptoApiURL = CoinList(currency[0]);

  useEffect(() => {
    axios.get(cryptoApiURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const buttons: any = post.map((el: any) => {
    return <NavCryptoButton
      key={el.id}
      cryptoId={el.id}
      logo={el.image}
      name={el.name}
    />

  })

  return (
    <ScrollArea style={{ height: "100vh" }}>
      <List
        spacing="xs"
        size="lg"
        center
      >
        {buttons}
      </List>
    </ScrollArea>
  );
}

export default NavCryptoList;
