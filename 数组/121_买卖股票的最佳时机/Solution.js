/**
 * @param {number[]} prices
 * @return {number}
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 */
var maxProfit = function (prices) {
    var masAns = 0
    var len = prices.length
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            var current = prices[j] - prices[i]
            if (current > masAns) {
                masAns = current
            }
        }
    }

    return masAns
};

var maxProfit = function (prices) {
    var len = prices.length
    if (len === 0) {
        return null
    }
    var maxAns = 0
    var min = Number.MAX_VALUE

    for (var i = 0; i < len; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > maxAns) {
            maxAns = prices[i] - min
        }
    }

    return maxAns
};
var prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));