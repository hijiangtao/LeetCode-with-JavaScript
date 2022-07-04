function maxProfit(prices: number[]): number {
    const minList = new Array(prices.length).fill(Number.MAX_SAFE_INTEGER);
    const maxList = new Array(prices.length).fill(Number.MIN_SAFE_INTEGER);

    let currentMin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        if (currentMin > prices[i]) {
            currentMin = prices[i];
        }
        minList[i] = currentMin;
    }

    let currentMax = Number.MIN_SAFE_INTEGER;
    for (let i = prices.length - 1; i >= 0; i--) {
        if (currentMax < prices[i]) {
            currentMax = prices[i];
        }
        maxList[i] = currentMax;
    }

    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, maxList[i] - minList[i]);
    }

    return maxProfit;
};

function maxProfit2(prices: number[]): number {
    const minList = new Array(prices.length).fill(Number.MAX_SAFE_INTEGER);

    let maxProfit = 0;
    let currentMin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        if (currentMin > prices[i]) {
            currentMin = prices[i];
        }
        minList[i] = currentMin;
        maxProfit = Math.max(maxProfit, prices[i] - minList[i]);
    }

    return maxProfit;
};