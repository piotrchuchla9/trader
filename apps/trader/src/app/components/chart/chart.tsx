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
import { Button, Group, Loader } from '@mantine/core';
import { chartDays } from '../../config/data';
import { useSearchParams } from 'react-router-dom';
import { sma } from '../../indicators/sma';
import { ema } from '../../indicators/ema';
import { macd } from '../../indicators/macd';


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
  const [params] = useSearchParams();

  let len = 0;
  const fetchCryptoData = async () => {
    const { data } = await axios.get(HistoricalChart(cryptoId, days, currency));
    setHistoricData(data.prices);

    const arr: any[] = [];
    len = 0;
    Object.keys(data.prices).forEach(function(key) {
      arr.push(data.prices[key][1]);
      len++;
      setArrLen(len);
    })
    setPrices(arr);
  }

  useEffect(() => {
    fetchCryptoData();
    setCurrency(params.get('currency') as string);
    setCryptoId(params.get('cryptoId') as string);
    // console.log(macd(prices, arrLen))
  }, [currency, days, cryptoId, params])

  // SMA
  // const avg = 7;
  // const movingAverage = [];

  // for (let i = 0; i < arrLen-(avg-1); i++) {
  //   const threeDataPoints = prices.slice(i, avg + i);
  //   threeDataPoints.reduce((total: any, num: any) => (total + num)/ avg);
  //   movingAverage.push(threeDataPoints.reduce((total: any, num: any) => total + num) / avg);
  // }

  return <div>
    {!historicData ?
      (
        <div style={{ width: "100%", height: "80vh", display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <div style={{ top: "50%" }}>
            <Loader color="grape" size="xl" />
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <>
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
                    text: `Price Past ${days} days`,
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
                  label: `Actual Price`,
                  borderColor: "purple",
                  backgroundColor: 'red',
                }, {
                  data: sma(prices, arrLen, 7),
                  label: `SMA`,
                  borderColor: "green",
                  backgroundColor: 'yellow',
                }, {
                  data: ema(prices, arrLen, 7),
                  label: `EMA`,
                  borderColor: "white",
                  backgroundColor: 'orange',
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

          </>
        </div>

      )}


  </div>
}

export default Chart;
function typeOf(arr: any[]): any {
  throw new Error('Function not implemented.');
}

