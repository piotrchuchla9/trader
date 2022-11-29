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
  const [currency, setCurrency] = useState(choosenCurrency);
  const choosenCryptoId = useGlobalState("defaultCryptoId");
  const [cryptoId, setCryptoId] = useState(choosenCryptoId);


  const fetchCryptoData = async () => {
    const { data } = await axios.get(HistoricalChart(cryptoId[0], days, currency[0]));
    setHistoricData(data.prices)
  }

  useEffect(() => {
    fetchCryptoData();
    console.log(days)
  }, [currency[0], days, cryptoId[0]])


  return <div>
    {!historicData ?
      (
        <div style={{ width: "100%", height: "80vh", display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <div style={{ top: "50%" }}>
            <Loader color="grape" size="xl" />
          </div>
        </div>
      ) : (
        <div>
          <>
            <Line options={{
              interaction: {
                intersect: false,
                mode: 'index',
              },
              responsive: true,
              plugins: {
                legend: {
                  position: 'center' as const,
                  display: false,
                },
                title: {
                  display: true,
                  text: '',
                },
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
                  label: `Price (Past ${days} Days) in ${currency[0]}`,
                  borderColor: "purple",
                  backgroundColor: 'red',
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
