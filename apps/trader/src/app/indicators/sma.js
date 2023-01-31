export const sma = (arr, len, avg) => {
  const simpleMovingAverage = [];

  for (let i = 0; i < len - (avg - 1); i++) {
    const dataPoints = arr.slice(i, avg + i);
    dataPoints.reduce((total, num) => (total + num) / avg);
    simpleMovingAverage.push(
      dataPoints.reduce((total, num) => total + num) / avg
    );
  }

  return simpleMovingAverage;
};
