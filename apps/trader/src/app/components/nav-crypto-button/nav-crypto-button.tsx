import { Button, Image, List, ThemeIcon } from '@mantine/core';
import { useState } from 'react';
import { setGlobalState, useGlobalState } from '../../config/states'

import styles from './nav-crypto-button.module.scss';

/* eslint-disable-next-line */
export interface NavCryptoButtonProps {
  logo?: string,
  name: string,
  cryptoId: string,
}

export function NavCryptoButton(props: NavCryptoButtonProps) {
  const [value, setValue] = useState<string | null>('bitcoin');

  const handleCryptoChange = (e: any) => {
    setGlobalState("defaultCrypto", e)
  }

  return (

    <List.Item
      icon={
        <ThemeIcon variant='outline' color='dark' size={38}>
          <Image src={props.logo}></Image>
        </ThemeIcon>
      }
    >
      <Button variant='light' color='violet' style={{ width: "230px " }}
        onClick={() => {
          setValue(props.cryptoId);
          handleCryptoChange(value);
        }}
      >
        <div>{props.name}</div>
      </Button>
    </List.Item>
  );
}

export default NavCryptoButton;
