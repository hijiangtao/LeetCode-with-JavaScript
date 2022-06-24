function climbStairs(n: number): number {
    if (n === 0) {
        return 0;
    }

    const stairsCache = [1, 2];

    for (let i = 2; i < n; i++) {
        stairsCache[i] = stairsCache[i-1] + stairsCache[i-2];
    }

    return stairsCache[n-1];
};