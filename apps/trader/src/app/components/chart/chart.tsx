import React from 'react';
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
// @ts-ignore
import faker from 'faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: '#e07511',
      backgroundColor: 'red',
    },
  ],
};

/* eslint-disable-next-line */
export interface ChartProps {}

export function Chart(props: ChartProps) {

  return <Line options={options} data={data} />;
}

export default Chart;
