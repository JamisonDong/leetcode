/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxAnx = 0
    let min = Number.MAX_VALUE
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        maxAnx = prices[i] - min > maxAnx ? prices[i] - min : maxAnx
    }
    return maxAnx
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));