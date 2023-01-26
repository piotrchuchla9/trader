/* eslint-disable jsx-a11y/alt-text */
import { AppShell, Button, Group, List, Text } from '@mantine/core';
import styles from './welcome-page.module.scss';
import ChartImg from '../../../assets/img/chartImg.png'
import CryptoImg from '../../../assets/img/cryptoImg.png'
import IndicatorImg from '../../../assets/img/indicatorImg.png'
import BuySellImg from '../../../assets/img/buySellImg.png'
import { useNavigate } from "react-router-dom";
import { IconRun } from '@tabler/icons';
import { useScrollIntoView } from '@mantine/hooks';
import { IconArrowDown, IconUserOff, IconShieldCheck, IconWorld, IconArrowBigRight, IconCircleCheck, IconArrowNarrowUp } from '@tabler/icons';

/* eslint-disable-next-line */
export interface WelcomePageProps { }

export function WelcomePage(props: WelcomePageProps) {

  const navigate = useNavigate();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });

  return (
    <div>
      <AppShell
        padding="md"
      >
        <div className='grid-container' style={{ height: '92vh', display: 'flex', justifyContent: 'center' }}>
          <div className='left' style={{ width: '40vw', height: '90vh', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', marginTop: 'auto', marginBottom: 'auto' }}>
              <h1 className='title' style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 80,
                color: '#66023C'
              }}>
                TRADER
              </h1>
              <h2 style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 45,
                fontWeight: 500,
                color: '#66023C'
              }}>
                Prosty sposób, aby rozpocząć przygodę z inwestowaniem w kryptowaluty
              </h2>
              <Group position='center'>
                <Button
                  leftIcon={<IconArrowDown />}
                  variant="outline"
                  color='pink'
                  size='xl'
                  radius="xl"
                  onClick={() => scrollIntoView({ alignment: 'start' })}
                  style={{ marginRight: '50px' }}
                >
                  Krótki poradnik</Button>
                <Button
                  leftIcon={<IconRun />}
                  variant="gradient"
                  gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
                  size='xl'
                  radius="xl"
                  onClick={() => navigate('/chart')}
                >
                  Zaczynamy</Button>

              </Group>
            </div>
          </div>
          <div className='right' style={{ width: '55vw', height: '90vh' }}>
            <img style={{ marginLeft: '5%', maxWidth: '100%', maxHeight: '100%' }} src={ChartImg}></img>
          </div>
        </div>
        <Text
          ref={targetRef}
          style={{
            fontFamily: '"Unbounded", sans-serif',
            fontSize: 45,
            fontWeight: 500,
            color: '#66023C',
            textAlign: 'center',
            marginTop: '50px',
            marginBottom: '100px'
          }}>
          Jesteś tu nowy?<br /> Oto niezbędne informacje
        </Text>
        <div className='grid-container' style={{ height: '92vh', display: 'flex', justifyContent: 'center' }}>
          <div className='left' style={{ width: '40vw', height: '90vh', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', marginTop: 'auto', marginBottom: 'auto' }}>
              <h1 className='title' style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 45,
                color: '#66023C'
              }}>
                Kryptowaluta
              </h1>
              <h3 style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 25,
                fontWeight: 500,
                color: '#66023C',
              }}>
                Jest to rodzaj cyfrowej waluty, która stale zyskuje na popularności.
                W krajach zachodnich transakcje kryptowalutami
                stają się coraz bardziej popularne, a Polska coraz bardziej otwiera się na ten rynek. <br />
              </h3>
              <h3 style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 25,
                fontWeight: 500,
                color: '#66023C'
              }}>
                Najpopularniejsze kryptowaluty to między innymi:
                Bitcoin, Ethereum, Litecoin czy Tether.
              </h3>
              <h3 style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 25,
                fontWeight: 500,
                color: '#66023C'
              }}>
                Transakcje kryptowalutami są:
                <div style={{ height: "10px" }}></div>
                <IconUserOff /> Anonimowe <br />
                <IconShieldCheck /> Bezpieczne <br />
                <IconWorld /> Ogólnodostępne
              </h3>

            </div>
          </div>
          <div className='right' style={{ width: '55vw', height: '90vh' }}>
            <img style={{ marginLeft: '5%', maxWidth: '100%', maxHeight: '100%' }} src={CryptoImg}></img>
          </div>
        </div>
        <div className='grid-container' style={{ height: '98vh', display: 'flex', justifyContent: 'center' }}>
          <div className='left' style={{ width: '40vw', height: '90vh', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', marginTop: 'auto', marginBottom: 'auto' }}>
              <h1 className='title' style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 45,
                color: '#66023C'
              }}>
                Wskaźniki analizy technicznej
              </h1>
              <h3 style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 25,
                fontWeight: 500,
                color: '#66023C'
              }}>
                Serwis korzysta z wskaźników analizy technicznej, czyli narzędzi analizyjących ceny kryptowalut. <br />
                Odczytuj <br />
                Są to wskaźniki: SMA, EMA, MACD i RSI (więcej dowiesz się o nich na stronie głównej serwisu). <br />
                Pomożemy Ci podjąć jak najlepszą decyzję zakupu lub sprzedaży. <br />
              </h3>
              <h3 style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 25,
                fontWeight: 500,
                color: 'red'
              }}>
                Pamiętaj - decyzja zakupu nie powinna opierać tylko na jedym wskaźniku! Zweryfikuj odczyty z innymi wskaźnikami!
              </h3>

            </div>
          </div>
          <div className='right' style={{ width: '55vw', height: '90vh' }}>
            <img style={{ marginLeft: '5%', maxWidth: '100%', maxHeight: '100%' }} src={IndicatorImg}></img>
          </div>
        </div>
        <div className='grid-container' style={{ height: '92vh', display: 'flex', justifyContent: 'center' }}>
          <div className='left' style={{ width: '40vw', height: '90vh', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', marginTop: 'auto', marginBottom: 'auto' }}>
              <h1 className='title' style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 45,
                color: '#66023C'
              }}>
                Zakupy
              </h1>
              <h3 style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 25,
                fontWeight: 500,
                color: '#66023C'
              }}>
                Aby handlować kryptowalutami: <br />
                <div style={{ height: "10px" }}></div>
                <IconArrowBigRight /> Załóż konto na jednej z giełd kryptowalut takich jak: Binance, Coinbase czy Kraken <br />
                <div style={{ height: "10px" }}></div>
                <IconArrowBigRight /> Utwórz swój wirtualny portfel
                <div style={{ height: "10px" }}></div>
                <IconArrowBigRight /> Dokonaj wpłaty na swoje konto w wybranej walucie
                <div style={{ height: "10px" }}></div>
                <IconArrowBigRight /> Wybierz kryptowalute którą chcesz handlować
                <div style={{ height: "10px" }}></div>
                <IconCircleCheck color='green' /> Udanych zakupów!
                <p style={{
                  fontFamily: '"Unbounded", sans-serif',
                  fontSize: 25,
                  fontWeight: 500,
                  color: 'red'
                }}>
                  Pamiętaj, by jak najlepiej zabezpieczyć swój wirtualny portfel!
                </p>
              </h3>

            </div>
          </div>
          <div className='right' style={{ width: '55vw', height: '90vh' }}>
            <img style={{ marginLeft: '5%', maxWidth: '98%', maxHeight: '100%' }} src={BuySellImg}></img>
          </div>
        </div>
        <Group position='apart'>
          <Button
            leftIcon={<IconRun />}
            variant="gradient"
            gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
            size='xl'
            radius="xl"
            style={{ visibility: 'hidden' }}
          >
            Zaczynamy</Button>
            <Button
            leftIcon={<IconRun />}
            variant="gradient"
            gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
            size='xl'
            radius="xl"
            onClick={() => navigate('/chart')}
            style={{ marginRight: '50px'}}
          >
            Zaczynamy</Button>
            <Button
            variant="gradient"
            gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
            size='xl'
            radius="xl"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <IconArrowNarrowUp /></Button>
        </Group>
      </AppShell>


    </div>);
}

export default WelcomePage;

