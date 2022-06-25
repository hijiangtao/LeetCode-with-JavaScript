function wordBreak(s: string, wordDict: string[]): boolean {
    if (!s) {
        return true;
    }
    const n = s.length;
    const dp = new Array(n+1).fill(false);
    dp[0] = true;

    for (let i = 0; i < n; i++) {
        for (let j = i+1; j <= n+1; j++) {
            if (dp[i] && wordDict.includes(s.slice(i, j))) {
                dp[j] = true;
            }
        }
    }

    return dp[n];
};