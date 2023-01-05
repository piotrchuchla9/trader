import { ema } from './ema';


export const macd = (arr, len) => {

    let res = [];

    for(let i = 0; i <= len; i++) {
        res.push(ema(arr, len, 12)[i] - ema(arr, len, 26)[i])
    }

    return res;
}