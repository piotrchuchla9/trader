import { Card, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import { setGlobalState, useGlobalState } from '../../config/states';
import { useSearchParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface MainInfoProps { }

export function MainInfo(props: MainInfoProps) {

  // const currency = useGlobalState("defaultCurrency");
  // const cryptoName = useGlobalState("defaultCryptoName");
  // const cryptoId = useGlobalState("defaultCryptoId");
  const [params] = useSearchParams();
  const [currency, setCurrency] = useState<string>('btc');
  const [cryptoId, setCryptoId] = useState<string>('bitcoin');

  const handleCryptoChangeName = (name: any) => {
    setGlobalState("defaultCryptoName", name);
  }
  const handleCryptoChangeId = (id: any) => {
    setGlobalState("defaultCryptoId", id);
  }

  useEffect(() => {
    // handleCryptoChangeName(cryptoName);
    // handleCryptoChangeId(cryptoId);
    setCurrency(params.get('currency') as string);
    setCryptoId(params.get('cryptoId') as string);
  }, [params])
  

  return (
    <Card p="sm">
      <Group position='center'>
        <Group position='apart' style={{ width: "400px", fontSize: "18px" }}>
          <div>
              <Card.Section>Waluta: <b>{currency}</b></Card.Section>
          </div>
          <div>
              <Card.Section>Kryptowaluta: <b>{cryptoId}</b></Card.Section>
          </div>
        </Group>
      </Group>
    </Card>
  );
}

export default MainInfo;
