// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { MantineProvider, AppShell, Navbar, Header, Group, ActionIcon, Image, ColorSchemeProvider, ColorScheme, Button } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useState } from 'react';
import Logo from '../assets/img/logo-no-background.png'
import NavCryptoList from './components/nav-crypto-list/nav-crypto-list';
import Chart from './components/chart/chart';
import NavCurrency from './components/nav-currency/nav-currency';
import { useGlobalState } from './config/states';


export function App() {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const dark = colorScheme === 'dark';

  const currency = useGlobalState("defaultCurrency");
  const crypto = useGlobalState("defaultCrypto");


  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 300 }} height={'100vh'} p="xs">{
              <div>
                <NavCurrency />
                <NavCryptoList />
              </div>
            }</Navbar>}
          header={
            <Header height={50} p="xs">{
              <Group position='apart'><Image
                src={Logo}
                width={100}
              >

              </Image><Group
                position='right'> <ActionIcon
                  variant="outline"
                  color={dark ? 'yellow' : 'blue'}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                    {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                  </ActionIcon>
                  <Button onClick={() => {
                    console.log("Curr: " + currency[0] + "\nCrypto: " + crypto[0])
                  }}>essa</Button>
                </Group></Group>
                }
            </Header>}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >



          <Chart />




        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
