export const sma = (arr, len, avg) => {
  const movingAverage = [];

  for (let i = 0; i < len - (avg - 1); i++) {
    const threeDataPoints = arr.slice(i, avg + i);
    threeDataPoints.reduce((total, num) => (total + num) / avg);
    movingAverage.push(
      threeDataPoints.reduce((total, num) => total + num) / avg
    );
  }

  return movingAverage;
};
