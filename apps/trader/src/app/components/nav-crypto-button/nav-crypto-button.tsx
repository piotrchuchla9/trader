import { Button, Image, List, ThemeIcon } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [cryptoName, setCryptoName] = useState<string | null>('Bitcoin');
  const currency = useGlobalState("defaultCurrency");

  const theme = useGlobalState("currentTheme");

  const [params, setParams] = useSearchParams();
  
  const getTheme = () => {
    if(theme[0] === 'dark') {
      return true
    } else {
      return false
    }
  }


  const handleCryptoIdChange = (e: any) => {
    // setGlobalState("defaultCryptoId", e);
    params.set('cryptoId', e);
    setParams(params);
  }

  const handleCryptoNameChange = (e: any) => {
    setGlobalState("defaultCryptoName", e)
  }

  useEffect(() => {
    handleCryptoIdChange(value);
    handleCryptoNameChange(cryptoName);
  }, [value, cryptoName])
  
  return (

    <List.Item
      icon={
        <ThemeIcon variant='light' color={getTheme() ? 'gray' : 'dark'} size={38}>
          <Image src={props.logo}></Image>
        </ThemeIcon>
      }
    >
      <Button variant='light' color='violet' style={{ width: "225px " }}
        onClick={() => {
          setValue(props.cryptoId);
          handleCryptoIdChange(value);

          setCryptoName(props.name);
          handleCryptoNameChange(cryptoName);

        }}
      >
        <div>{props.name}</div>
      </Button>
    </List.Item>
  );
}

export default NavCryptoButton;


