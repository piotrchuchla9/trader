import { Select } from '@mantine/core';
import { useEffect, useState } from 'react';
import axios from "axios";

import styles from './nav-currency.module.scss';

/* eslint-disable-next-line */
export interface NavCurrencyProps {}

const currencyApiURL = "https://api.coingecko.com/api/v3/simple/supported_vs_currencies";

export function NavCurrency(props: NavCurrencyProps) {

  const [post, setPost] = useState([]);
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    axios.get(currencyApiURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;


  return (
    <Select
      style={{ marginBottom: '20px' }}
      transition="pop-top-left"
      transitionDuration={400}
      transitionTimingFunction="ease"
      label="Your Currency"
      placeholder="PLN"
      searchable
      nothingFound="No options"
      data={post}
      value={value}
      onChange={setValue}
    />
  );
}

export default NavCurrency;
