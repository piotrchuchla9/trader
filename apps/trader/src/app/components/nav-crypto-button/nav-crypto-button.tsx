import { Button, Image, Group, Text, List, ThemeIcon } from '@mantine/core';
import styles from './nav-crypto-button.module.scss';

/* eslint-disable-next-line */
export interface NavCryptoButtonProps {
  logo?: string,
  name: string
}

export function NavCryptoButton(props: NavCryptoButtonProps) {
  return (
    <List.Item
      icon={
        <ThemeIcon color="violet" size={38}>
          <Image src={props.logo}></Image>
        </ThemeIcon>
      }
    >
      <Button variant='light' color='violet' style={{ width: "230px "}}>    
        <div>{props.name}</div>
      </Button>
    </List.Item>
  );
}

export default NavCryptoButton;
