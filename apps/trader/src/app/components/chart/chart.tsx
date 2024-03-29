/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import axios from 'axios';
import { HistoricalChart } from '../../config/api';
import { useGlobalState } from '../../config/states';
import { Button, Group, Loader, NumberInput, Text, Stack, Collapse } from '@mantine/core';
import { chartDays } from '../../config/data';
import { useSearchParams } from 'react-router-dom';
import { sma } from '../../indicators/sma';
import { ema } from '../../indicators/ema';
import { macd } from '../../indicators/macd';
import { myValue } from '../helpers/myValue';
import { std } from '../../indicators/std';
import { rsi } from '../../indicators/rsi';
import { numberLine } from '../helpers/numberLine';
import { IconArrowDown, IconArrowUp } from '@tabler/icons';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



/* eslint-disable-next-line */
export interface ChartProps { }

export function Chart(props: ChartProps) {

  const [historicData, setHistoricData] = useState<any>();
  const [days, setDays] = useState(7);
  const choosenCurrency = useGlobalState("defaultCurrency");
  // const [currency, setCurrency] = useState(choosenCurrency);
  const choosenCryptoId = useGlobalState("defaultCryptoId");
  // const [cryptoId, setCryptoId] = useState(choosenCryptoId);
  const [currency, setCurrency] = useState<string>('usd');
  const [cryptoId, setCryptoId] = useState<string>('bitcoin');
  const [prices, setPrices] = useState<any>();
  const [arrLen, setArrLen] = useState<any>();
  const [inputValue, setInputValue] = useState<number | undefined>(undefined);
  const [params] = useSearchParams();

  const [openedData, setOpenedData] = useState(true);
  const [openedMACD, setOpenedMACD] = useState(false);
  const [openedRSI, setOpenedRSI] = useState(false);

  let len = 0;
  const fetchCryptoData = async () => {
    const { data } = await axios.get(HistoricalChart(cryptoId, days, currency));
    setHistoricData(data.prices);

    const arr: any[] = [];
    len = 0;
    Object.keys(data.prices).forEach(function (key) {
      arr.push(data.prices[key][1]);
      len++;
      setArrLen(len);
    })
    setPrices(arr);
  }


  useEffect(() => {
    if(cryptoId !== null) {
      fetchCryptoData();
    }
    
    setCurrency(params.get('currency') as string);
    setCryptoId(params.get('cryptoId') as string);
  }, [currency, days, cryptoId, params])

  const showTextData = 'Pokaż Wykres Histogramu';
  const hideTextData = 'Schowaj Wykres Histogramu';
  const showTextMACD = 'Pokaż Wykres Wskaźnika MACD';
  const hideTextMACD = 'Schowaj Wykres Wskaźnika MACD';
  const showTextRSI = 'Pokaż Wykres Wskaźnika RSI';
  const hideTextRSI = 'Schowaj Wykres Wskaźnika RSI';

  return <div>
    {!historicData ?
      (
        <div style={{ width: "100%", height: "80vh", display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <div style={{ top: "50%" }}>
            <Loader color="grape" size="xl" />
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '10px', width: '99%' }}>

          <Group position='center' style={{ marginTop: 20, marginBottom: 20 }}>
            <Button color='grape' variant='light' rightIcon={openedData ? <IconArrowUp /> : <IconArrowDown />}
              onClick={() => setOpenedData((o) => !o)}
            >
              {openedData ? hideTextData : showTextData}
            </Button>
            <Button color='grape' variant='light' rightIcon={openedMACD ? <IconArrowUp /> : <IconArrowDown />}
              onClick={() => setOpenedMACD((o) => !o)}
            >
              {openedMACD ? hideTextMACD : showTextMACD}
            </Button>
            <Button color='grape' variant='light' rightIcon={openedRSI ? <IconArrowUp /> : <IconArrowDown />}
              onClick={() => setOpenedRSI((o) => !o)}
            >
              {openedRSI ? hideTextRSI : showTextRSI}
            </Button>
          </Group>

          <>
            <Collapse in={openedData}>
              <div>
                <Group position='center'>
                  <div style={{ width: '30%' }}>
                    <NumberInput
                      label={`Porównaj cenę kryptowaluty z danymi poniżej w ${currency}`}
                      placeholder={`Twoja kryptowaluta w ${currency}`}
                      min={0}
                      decimalSeparator="."
                      step={5}
                      precision={1}
                      stepHoldDelay={500}
                      stepHoldInterval={(t) => Math.max(1500 / t ** 2, 10)}
                      value={inputValue}
                      onChange={(val) => setInputValue(val)}
                    />
                  </div>
                </Group>
              </div>
              <div style={{ marginTop: '20px' }}></div>
              <Line options={{
                interaction: {
                  intersect: false,
                  mode: 'index',
                },
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const,
                    title: {
                      display: true,
                      text: `Ceny z ostatnich ${days} dni`,
                    },
                  }

                },
              }} data={{
                labels: historicData.map((cryptoId: (string | number | Date)[]) => {
                  const date = new Date(cryptoId[0]);
                  const time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicData.map((cryptoId: any[]) => cryptoId[1]),
                    label: `Aktualna cena`,
                    borderColor: "purple",
                    backgroundColor: '#0771B2',
                  }, {
                    data: sma(prices, arrLen, 7),
                    label: `SMA`,
                    borderColor: "green",
                    backgroundColor: 'yellow',
                  }, {
                    data: ema(prices, arrLen, 7),
                    label: `EMA`,
                    borderColor: "red",
                    backgroundColor: 'orange',
                  }, {
                    data: myValue(inputValue, arrLen),
                    label: `Twoja kryptowaluta`,
                    borderColor: "cyan",
                    backgroundColor: 'cyan',
                  }

                ],
              }} />
              <Group position='center' style={{ marginTop: "20px" }}>
                {chartDays.map((el) => {
                  if (el.value === days) {
                    return <Button variant='light' color='violet'
                      key={el.value}
                      onClick={() => {
                        setDays(el.value);
                      }}
                      disabled
                    >
                      {el.label}
                    </Button>
                  } else {
                    return <Button variant='light' color='violet'
                      key={el.value}
                      onClick={() => {
                        setDays(el.value);
                      }}
                    >
                      {el.label}
                    </Button>
                  }
                })}
              </Group>
            </Collapse>
            <div style={{ marginTop: '20px' }}>
              <Collapse in={openedMACD}>
                <Text
                  style={{ marginTop: '40px' }}
                  ta='center'
                  fz='xl'
                  fw={700}
                >Czy warto podjąć działanie?</Text>
                <Line options={{
                  interaction: {
                    intersect: false,
                    mode: 'index',
                  },
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top' as const,
                      title: {
                        display: true,
                        // text: `Is it worth to invest?`,
                      },
                    }
                  },
                }} data={{
                  labels: historicData.map((cryptoId: (string | number | Date)[]) => {
                    const date = new Date(cryptoId[0]);
                    const time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
                  }),
                  datasets: [
                    {
                      data: macd(prices, arrLen),
                      label: `MACD`,
                      borderColor: "purple",
                      backgroundColor: 'cyan',
                    },
                    {
                      data: numberLine(arrLen, 0),
                      label: `Linia sygnału`,
                      borderColor: "red",
                      backgroundColor: 'red',
                    },
                  ],
                }} />
              </Collapse>
              <Collapse in={openedRSI}>
                <Text
                  style={{ marginTop: '40px' }}
                  ta='center'
                  fz='xl'
                  fw={700}
                >Sprawdź sygnały</Text>
                <Line options={{
                  interaction: {
                    intersect: false,
                    mode: 'index',
                  },
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top' as const,
                      title: {
                        display: true,
                        // text: `Is it worth to invest?`,
                      },
                    }
                  },
                }} data={{
                  labels: historicData.map((cryptoId: (string | number | Date)[]) => {
                    const date = new Date(cryptoId[0]);
                    const time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
                  }),
                  datasets: [
                    {
                      data: rsi(prices, arrLen),
                      label: `RSI`,
                      borderColor: "purple",
                      backgroundColor: 'cyan',
                    },
                    {
                      data: numberLine(arrLen, 70),
                      label: `Wysoki sygnał`,
                      borderColor: "green",
                      backgroundColor: 'green',
                    },
                    {
                      data: numberLine(arrLen, 30),
                      label: `Niski sygnał`,
                      borderColor: "red",
                      backgroundColor: 'red',
                    },
                  ],
                }} />
              </Collapse>
            </div>

          </>
        </div>

      )}


  </div>
}

export default Chart;
function typeOf(arr: any[]): any {
  throw new Error('Function not implemented.');
}

