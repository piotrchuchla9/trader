export const ema = (arr, len, peroid) => {
  
  const res = [];
  const k = 2 / (peroid+1);
  let calcEma = arr[0];
  for(let i = 0; i < len; i++) {
    calcEma = (arr[i] * k) + (calcEma * (1-k));
    res.push((arr[i] * k) + (calcEma * (1-k)))
  }

  return res;

};
