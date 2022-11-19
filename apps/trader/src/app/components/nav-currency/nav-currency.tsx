import { NativeSelect } from '@mantine/core';
import { useEffect, useState } from 'react';
import axios from "axios";
import { setGlobalState, useGlobalState } from '../../config/states'

import styles from './nav-currency.module.scss';
import { Currencies } from '../../config/api';

/* eslint-disable-next-line */
export interface NavCurrencyProps {}

const currencyApiURL = Currencies;

export function NavCurrency(props: NavCurrencyProps) {

  const [post, setPost] = useState([]);
  const [value, setValue] = useState('usd');


  useEffect(() => {
    axios.get(currencyApiURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const handleCurrancyChange = (e: any) => {
    setGlobalState("defaultCurrency", e.target.value)
  }

  return (
    <NativeSelect
      style={{ marginBottom: '20px' }}
      label="Your Currency"
      placeholder="USD"
      data={post}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      onChangeCapture={handleCurrancyChange}

    />
  );
}

export default NavCurrency;
