// export const rsi = (array, len) => {
//   let res = [];

//   function calculateRSI(arr) {
//     // Calculate the average of the upward price changes

//     let avgUpwardChange = 0;
//     for (let i = 1; i < len; i++) {
//       avgUpwardChange = avgUpwardChange + Math.max(0, arr[i] - arr[i - 1]);
//     }
//     avgUpwardChange = avgUpwardChange / len;

//     // Calculate the average of the downward price changes
//     let avgDownwardChange = 0;
//     for (let i = 1; i < len; i++) {
//       avgDownwardChange += Math.max(0, arr[i - 1] - arr[i]);
//     }
//     avgDownwardChange = avgDownwardChange / len;

//     // Calculate the RSI
//     const rsi = 100 - 100 / (1 + avgUpwardChange / avgDownwardChange);

//     return rsi
//   }

//   for (let i = 0; i <= len; i++) {
//     let output = array.slice(i, 6 + i);
//     res.push(calculateRSI(output));
//   }

//   res.push(calculateRSI(array));
//   calculateRSI(array);

//   return res;
// };

export const rsi = (array, len) => {
  let res = [];

  for (let i = 0; i <= len; i++) {
    let arr = array.slice(i, 6 + i);

    let avgUp = [];

    let avgUpwardChange = 0;
    for (let i = 1; i < len; i++) {
        avgUpwardChange = avgUpwardChange + Math.max(0, arr[i] - arr[i - 1]);
        avgUp.push(avgUpwardChange)
    }
    avgUp = avgUp.filter(x => !isNaN(x))
    for(let i in avgUp) {
        avgUp[i] = (Number((avgUp[i]).toFixed(3)))
    }
    let avU = 0;
    for(let i in avgUp) {
        avU += avgUp[i]
    }
    avgUpwardChange = avU
    avgUpwardChange = avgUpwardChange / (len);


    let avgDw = [];
    let avgDownwardChange = 0;
    for (let i = 1; i < len; i++) {
      if (avgDownwardChange !== isNaN) {
        avgDownwardChange += Math.max(0, arr[i - 1] - arr[i]);
        avgDw.push(avgDownwardChange);
      }
    }
    avgDw = avgDw.filter(x => !isNaN(x))
    for(let i in avgDw) {
        avgDw[i] = (Number((avgDw[i]).toFixed(3)))
    }
    let avD = 0;
    for(let i in avgDw) {
        avD += avgDw[i]
    }

    avgDownwardChange = avD
    avgDownwardChange = avgDownwardChange / (len);

    const rsiRes = (100 - 100 / (1 + (avgUpwardChange / avgDownwardChange)));
    res.push(rsiRes);
  }
  return res;
};
