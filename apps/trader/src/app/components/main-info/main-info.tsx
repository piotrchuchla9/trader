import { Card, Group } from '@mantine/core';
import { useEffect } from 'react';
import { setGlobalState, useGlobalState } from '../../config/states';
import styles from './main-info.module.scss';

/* eslint-disable-next-line */
export interface MainInfoProps { }

export function MainInfo(props: MainInfoProps) {

  const currency = useGlobalState("defaultCurrency");
  const cryptoName = useGlobalState("defaultCryptoName");
  const cryptoId = useGlobalState("defaultCryptoId");

  const handleCryptoChangeName = (name: any) => {
    setGlobalState("defaultCryptoName", name);
  }
  const handleCryptoChangeId = (id: any) => {
    setGlobalState("defaultCryptoId", id);
  }

  useEffect(() => {
    handleCryptoChangeName(cryptoName);
    handleCryptoChangeId(cryptoId);
  }, [])
  

  return (
    <Card p="md">
      <Group position='center'>
        <Group position='apart' style={{ width: "400px" }}>
          <div>
              <Card.Section>Currency: <b>{currency[0].toUpperCase()}</b></Card.Section>
          </div>
          <div>
              <Card.Section>Crypto: <b>{cryptoName[0]}</b></Card.Section>
          </div>
        </Group>
      </Group>
    </Card>
  );
}

export default MainInfo;
