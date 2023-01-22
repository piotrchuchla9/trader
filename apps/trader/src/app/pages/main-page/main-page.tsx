import { MantineProvider, AppShell, Navbar, Text, Header, Group, Modal, ActionIcon, Image, ColorSchemeProvider, ColorScheme, Button, ThemeIcon, Anchor, List } from '@mantine/core';
import { IconSun, IconMoonStars, IconCheck, IconBan, IconTimeline, IconSwitch2, IconTool, IconQuestionMark } from '@tabler/icons';
import { useEffect, useState } from 'react';
import Logo from '../../../assets/img/logo-no-background.png'
import NavCryptoList from '../../components/nav-crypto-list/nav-crypto-list';
import Chart from '../../components/chart/chart';
import NavCurrency from '../../components/nav-currency/nav-currency';
import { setGlobalState, useGlobalState } from '../../config/states';
import MainInfo from '../../components/main-info/main-info';
import { useNavigate, useSearchParams } from 'react-router-dom';



/* eslint-disable-next-line */
export interface MainPageProps { }

export function MainPage(props: MainPageProps) {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const dark = colorScheme === 'dark';

  const [params, setParams] = useSearchParams()
  const [openedData, setOpenedData] = useState(false);
  const [openedMACD, setOpenedMACD] = useState(false);
  const [openedRSI, setOpenedRSI] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    if (params.get("currency") === null) {
      params.set('currency', 'usd');
      setParams(params);
    }
    if (params.get("cryptoId") === 'undefined' || null) {
      params.set('cryptoId', 'bitcoin');
      setParams(params);
    }
  }, [])

  // useEffect(() => {   
  //   console.log(params.get("currency"));
  //   console.log(params.get("cryptoId"));
  // }, [params])

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
              <Group position='apart'>
                <Group>
                  <Image
                    src={Logo}
                    width={100}
                  >
                  </Image>
                  <Anchor
                    href="/"
                    color={dark ? 'grape' : 'blue'}
                    size='lg'
                    weight='bold'
                  >
                    Home
                  </Anchor>
                </Group>



                <Group position='right'>

                  <Modal
                    opened={openedData}
                    onClose={() => setOpenedData(false)}
                    overflow="outside"
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    size="50%"
                  >
                    <Text align='center' fz={40}
                    >
                      Data Guide  <ThemeIcon color='grape' variant="light">
                        <IconTimeline />
                      </ThemeIcon>
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconTool />
                      </ThemeIcon> Actual Price
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      A raw cryptocurrency price chart displays the historical price data for a specific cryptocurrency over a certain period of time. This include the close prices for each period. The chart can be displayed in different time frames, such as daily, weekly, monthly, three months or yearly.<br></br> The raw chart allows you to see the historical price movements of the cryptocurrency and can be used to identify trends and patterns in the market.<br></br> Additionally, this chart can be used for technical analysis to identify key levels of support and resistance, and to potentially identify buy and sell signals.
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconTool />
                      </ThemeIcon> SMA (Simple Moving Average)
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      SMA is a technical indicator that involves calculating the arithmetic mean of prices from a specific data range. It is one of the simplest trend indicators that helps to analyze price movements in the market.<br></br> SMA is calculated by summing the prices over a certain period and dividing by the number of days in that period.

                      For example, if you want to calculate the SMA of the last 7 days, you would sum the prices of those 7 days and divide by 7.<br />
                      The SMA chart allows for easy recognition of trends, it is often used as a moving average line which helps investors evaluate if the market is in an uptrend or downtrend.<br /> The SMA indicator is often used in conjunction with other indicators and analysis to get a more complete picture of the market.

                      One of its limitation is that it does not take into account prices from recent days more than others.
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconTool />
                      </ThemeIcon> EMA (Exponential Moving Average)
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      EMA is a technical indicator that is similar to Simple Moving Average (SMA), but it places more weight on recent prices to better capture the current trend in the market.<br /> The EMA is calculated by applying a weighting factor to the most recent prices, with the weighting decreasing exponentially as the prices get older. This means that more recent prices have a greater impact on the EMA than older prices. <br />

                      The EMA is often used to identify trends and generate buy and sell signals. When the current price is above the EMA, it is generally considered an indication of an uptrend, while when the current price is below the EMA, it is considered an indication of a downtrend. Additionally, EMA crossovers can also be used as a signal for trend changes.<br />

                      EMA is considered to be more responsive to recent price changes than SMA, which makes it a preferred choice for traders who want to capture short-term movements in the market. However, it's worth to note that EMA also generates more signals and can lead to more false signals than SMA.
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                    <ThemeIcon color='grape' size="sm" variant="light">
                        <IconSwitch2 />
                      </ThemeIcon> Comparsion of EMA and SMA
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      SMA and EMA are technical indicators used in financial market analysis to determine trends.<br /> SMA is the arithmetic mean of the last n prices, while EMA is a weighted average that places more emphasis on the most recent prices. <br />Both indicators are used to determine trends and buy or sell signals. EMA is often considered more accurate than SMA because it places more emphasis on the most recent data.
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                    <ThemeIcon color='grape' size="sm" variant="light">
                        <IconQuestionMark />
                      </ThemeIcon> Advantages and disadvantages of SMA and EMA indicators:
                    </Text>
                    <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                      Advantages of SMA:
                    </Text>
                    <List withPadding>
                      <List.Item icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }>Easy to understand and interpret.</List.Item>
                      <List.Item icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }>Does not require complex calculations.</List.Item>
                      <List.Item icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }>It is stable and not prone to changes in the data composition.</List.Item>
                    </List>
                    <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                      Disadvantages of SMA:
                    </Text>
                    <List withPadding style={{ marginBottom: 16 }}>
                      <List.Item icon={
                        <ThemeIcon color="red" size={24} radius="xl">
                          <IconBan size={16} />
                        </ThemeIcon>
                      }>Not very good at responding to recent price changes.</List.Item>
                      <List.Item icon={
                        <ThemeIcon color="red" size={24} radius="xl">
                          <IconBan size={16} />
                        </ThemeIcon>
                      }>Can generate false signals, especially in volatile markets.</List.Item>
                    </List>
                    <Text fz={16} fw={500}>
                      Advantages of EMA:
                    </Text>
                    <List withPadding>
                      <List.Item icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }>More responsive to recent price changes than SMA.</List.Item>
                      <List.Item icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }>Can help in identifying trends and generating buy/sell signals.</List.Item>
                    </List>
                    <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                      Disadvantages of EMA:
                    </Text>
                    <List withPadding>
                      <List.Item icon={
                        <ThemeIcon color="red" size={24} radius="xl">
                          <IconBan size={16} />
                        </ThemeIcon>
                      }>More complex to calculate than SMA.</List.Item>
                      <List.Item icon={
                        <ThemeIcon color="red" size={24} radius="xl">
                          <IconBan size={16} />
                        </ThemeIcon>
                      }>Can generate more false signals than SMA.</List.Item>
                    </List>
                  </Modal>
                  <Button
                    variant='subtle'
                    color={dark ? 'grape' : 'blue'}
                    onClick={() => setOpenedData(true)}
                  >
                    Data
                  </Button>
                  <Modal
                    opened={openedMACD}
                    onClose={() => setOpenedMACD(false)}
                    overflow="outside"
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    size="50%"
                  >
                    <Text align='center' fz={40}
                    >
                      MACD Indicator <ThemeIcon color='grape' variant="light">
                        <IconTimeline />
                      </ThemeIcon>
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                    <ThemeIcon color='grape' size="sm" variant="light">
                        <IconTool />
                      </ThemeIcon> MACD (Moving Average Convergence Divergence)
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      <Text style={{ marginBottom: 8 }}>
                        MACD is a technical indicator that is used to identify changes in momentum and trend. It is calculated by subtracting the 26-period Exponential Moving Average (EMA) from the 12-period EMA. The result is a line that oscillates around zero, and is called the MACD line. Additionally, a 9-period EMA of the MACD line is plotted on the chart and is called the signal line.<br />
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        The MACD line and the signal line are used together to generate buy and sell signals. When the MACD line crosses above the signal line, it is considered a bullish signal, indicating that the momentum is shifting to the upside and that it may be a good time to buy. Conversely, when the MACD line crosses below the signal line, it is considered a bearish signal, indicating that the momentum is shifting to the downside and that it may be a good time to sell.<br />
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        MACD is a versatile indicator that can be used in various time frames and for different markets, it is often used in combination with other indicators and analysis to confirm trends and identify potential buy and sell opportunities.
                      </Text>
                      <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconQuestionMark />
                      </ThemeIcon> Advantages and disadvantages of MACD indicator:
                      </Text>
                      <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                        Advantages:
                      </Text>
                      <List withPadding>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Helps to identify changes in trends and momentum in the market, allowing for quicker response to price changes.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Generates buy and sell signals, allowing for better utilization of investment opportunities.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>It is versatile and can be used in different time frames and for different markets.</List.Item>
                      </List>
                      <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                        Disadvantages:
                      </Text>
                      <List withPadding>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Can generate false signals, especially in unstable markets.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Does not take into account all factors affecting the market, so it should be used with other indicators and analysis.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Delayed signals, especially in comparison to leading indicators.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Lack of specific recommendations for stop loss or take profit levels.</List.Item>
                      </List>
                    </Text>
                  </Modal>
                  <Button
                    variant='subtle'
                    color={dark ? 'grape' : 'blue'}
                    onClick={() => setOpenedMACD(true)}
                  >
                    MACD
                  </Button>
                  <Modal
                    opened={openedRSI}
                    onClose={() => setOpenedRSI(false)}
                    overflow="outside"
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    size="50%"
                  >
                    <Text align='center' fz={40}
                    >
                      RSI Indicator  <ThemeIcon color='grape' variant="light">
                        <IconTimeline />
                      </ThemeIcon>
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                    <ThemeIcon color='grape' size="sm" variant="light">
                        <IconTool />
                      </ThemeIcon> RSI (Relative Strength Index)
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      <Text style={{ marginBottom: 8 }}>
                        RSI is a momentum indicator that is used to measure the strength of an asset's price action. It compares the magnitude of recent gains to recent losses in an attempt to determine overbought and oversold conditions of an asset.
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        It is calculated by dividing the average gain of up periods by the average loss of down periods, and then converting the result into a value between 0 and 100.
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        Traditionally, an RSI reading above 70 is considered overbought, indicating that the asset may be due for a price correction, and a reading below 30 is considered oversold, indicating that the asset may be undervalued and due for a price increase.
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        The RSI can also be used to generate buy and sell signals. A bullish signal is generated when the RSI crosses above the 30 level, indicating that the asset may be undervalued and due for a price increase. A bearish signal is generated when the RSI crosses below the 70 level, indicating that the asset may be overvalued and due for a price correction.
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        It's worth noting that RSI can also stay in overbought or oversold territory for a longer time, so it should be used in conjunction with other indicators and analysis to confirm trends and identify potential buy and sell opportunities.
                      </Text>
                      <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconQuestionMark />
                      </ThemeIcon> Advantages and disadvantages of MACD indicator:
                      </Text>
                      <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                        Advantages:
                      </Text>
                      <List withPadding>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Helps to identify overbought and oversold market conditions, allowing for better risk management.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Generates buy and sell signals, allowing for better utilization of investment opportunities.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Simple to understand and interpret.</List.Item>
                      </List>
                      <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                        Disadvantages:
                      </Text>
                      <List withPadding>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Can generate false signals, especially in unstable markets.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Often used as a sole indicator, which can lead to incorrect investment decisions.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Delayed signals, especially in comparison to leading indicators.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Lack of specific recommendations for stop loss or take profit levels.</List.Item>
                      </List>
                    </Text>
                  </Modal>
                  <Button
                    variant='subtle'
                    color={dark ? 'grape' : 'blue'}
                    onClick={() => setOpenedRSI(true)}
                  >
                    RSI
                  </Button>



                  <ActionIcon
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
