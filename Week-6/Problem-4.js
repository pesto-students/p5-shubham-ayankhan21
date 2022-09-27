//Best time to buy and sell stock

const maxProfit = function(prices) {
    let min_price = prices[0];
    let max_profit = 0;
    for(let i = 0;i<prices.length;i++){
       min_price = Math.min(min_price,prices[i])
       let prof = prices[i]-min_price;
       max_profit = Math.max(max_profit,prof)
    }
   return max_profit;
};

console.log(maxProfit([7,2,1,3,4,8,5]))