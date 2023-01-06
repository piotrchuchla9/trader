export const std = (arr, len, peroid) => {
  
    const avg = (arr) => {
      let sum = 0;
      for(let i in arr) {
        sum += parseFloat(arr[i]);
      }

      return sum/len;
    }

    let sqrDiff;

    const st = (val) => {
      let mean = avg(val);

      sqrDiff = val?.map( (v) => {
          let diff = v - mean;
          sqrDiff = diff * diff;

          return sqrDiff;
      } )

      let varriencie = avg(sqrDiff);

      let out = Math.sqrt(varriencie);
      return out;

    }

    let res = [];
    
    for(let i = 0; i <= len - peroid; i++) {
      let output = arr.slice(i, peroid + i)
      res.push(st(output))
    }

    // console.log(res)
    return res;


  
  };
  