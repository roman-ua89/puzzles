
var maxProfit_slow = function(prices) {
  let diff = 0;

  for (let i = 0; i < prices.length; i++) {

    for (let j = i; j < prices.length; j++) {
      const result = prices[j] - prices[i];
      if (result > 0 && result > diff) {
        diff = result;
      }
    }
  }

  return diff;

};

var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];

  for (const price of prices) {
    profit = Math.max(profit, price - min);
    min = Math.min(price, min);
  }

  return profit;

};

const prices1 = [7,1,5,3,6,4];
console.log('res1: ', maxProfit(prices1)) // 5


const prices2 = prices = [7,6,4,3,1];
console.log('res2: ', maxProfit(prices2)) // 0