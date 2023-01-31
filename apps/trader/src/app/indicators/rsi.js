export const rsi = (array, len) => {
  let res = [];

  for (let i = 0; i <= len - 14; i++) {

    let arr = array.slice(i, 14 + i);

    let avgUp = [];

    let avgUpwardChange = 0;
    for (let i = 1; i < len; i++) {
      avgUpwardChange = avgUpwardChange + Math.max(0, arr[i] - arr[i - 1]);
      avgUp.push(avgUpwardChange);
    }
    avgUp = avgUp.filter((x) => !isNaN(x));
    for (let i in avgUp) {
      avgUp[i] = Number(avgUp[i].toFixed(3));
    }
    let avU = 0;
    for (let i in avgUp) {
      avU += avgUp[i];
    }
    avgUpwardChange = avU;
    avgUpwardChange = avgUpwardChange / len;

    let avgDw = [];
    let avgDownwardChange = 0;
    for (let i = 1; i < len; i++) {
      if (avgDownwardChange !== isNaN) {
        avgDownwardChange += Math.max(0, arr[i - 1] - arr[i]);
        avgDw.push(avgDownwardChange);
      }
    }
    avgDw = avgDw.filter((x) => !isNaN(x));
    for (let i in avgDw) {
      avgDw[i] = Number(avgDw[i].toFixed(6));
    }
    let avD = 0;
    for (let i in avgDw) {
      avD += avgDw[i];
    }

    avgDownwardChange = avD;
    avgDownwardChange = avgDownwardChange / len;

    const rsiRes = 100 - 100 / (1 + avgUpwardChange / avgDownwardChange);
    res.push(rsiRes);

  }

  return res;
};
