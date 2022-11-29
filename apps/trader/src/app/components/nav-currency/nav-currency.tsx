import { NativeSelect } from '@mantine/core';
import { useEffect, useState } from 'react';
import axios from "axios";
import { setGlobalState, useGlobalState } from '../../config/states'

import styles from './nav-currency.module.scss';
import { Currencies } from '../../config/api';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface NavCurrencyProps {}

const currencyApiURL = Currencies;

export function NavCurrency(props: NavCurrencyProps) {

  const [post, setPost] = useState([]);
  const [value, setValue] = useState('usd');
  const [params, setParams] = useSearchParams()


  const handleCurrancyChange = (e: any) => {
    setGlobalState("defaultCurrency", e.target.value);
    params.set('currency', e.target.value);
    setParams(params);
  }

  useEffect(() => {
    axios.get(currencyApiURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  
  if (!post) return null;

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
