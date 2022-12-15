import { ema } from './ema';

export const macd = (arr, len) => {

    let res = [];

    for(let i = 0; i < len; i++) {
        let ema12 = ema(arr[0], len, 12);
        let ema26 = ema(arr[0], len, 26);
        let calcMacd = ema12 - ema26;
        parseFloat(calcMacd)
        res.push(calcMacd);
    }

    return res;
}