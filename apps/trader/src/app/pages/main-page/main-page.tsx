import { MantineProvider, AppShell, Navbar, Header, Group, ActionIcon, Image, ColorSchemeProvider, ColorScheme, Button } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useEffect, useState } from 'react';
import Logo from '../../../assets/img/logo-no-background.png'
import NavCryptoList from '../../components/nav-crypto-list/nav-crypto-list';
import Chart from '../../components/chart/chart';
import NavCurrency from '../../components/nav-currency/nav-currency';
import { setGlobalState, useGlobalState } from '../../config/states';
import MainInfo from '../../components/main-info/main-info';
import { useSearchParams } from 'react-router-dom';


/* eslint-disable-next-line */
export interface MainPageProps {}

export function MainPage(props: MainPageProps) {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const dark = colorScheme === 'dark';

  const [params, setParams] = useSearchParams()

  useEffect(() => {
    if(params.get("currency") === null) {
      params.set('currency', 'usd');
      setParams(params);
    }
    if(params.get("cryptoId") === 'undefined' || null) {
      params.set('cryptoId', 'bitcoin');
      setParams(params);
    }
  }, [])

  

  useEffect(() => {   
    console.log(params.get("currency"));
    console.log(params.get("cryptoId"));
  }, [params])
  

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
                  onClick={() => {
                    toggleColorScheme();
                    if (dark === true) {
                      setGlobalState("currentTheme", 'dark');
                    } else {
                      setGlobalState("currentTheme", 'light');
                    }
                  }}
                  title="Toggle color scheme"
                >
                    {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                  </ActionIcon>
                </Group></Group>
            }
            </Header>}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
            <MainInfo />

            <Chart />



        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MainPage;
