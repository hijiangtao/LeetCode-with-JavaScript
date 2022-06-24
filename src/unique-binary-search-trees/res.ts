function numTrees(n: number): number {
    const calculateCache = new Array(n+1).fill(0);
    calculateCache[0] = 1;
    calculateCache[1] = 1;

    for (let i=2; i<=n; i++) {
        for (let j = 0; j <= i-1; j++) {
            calculateCache[i] += calculateCache[i-j-1] * calculateCache[j];
        }
    }

    return calculateCache[n];
};