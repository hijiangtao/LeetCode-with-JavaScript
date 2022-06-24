function minPathSum(grid: number[][]): number {
    const pathCache: number[][] = [];

    function calculate(m:number, n:number): number {
        if (m === 0 && n === 0) {
            return pathCache[0][0];
        }

        if (m === 0) {
            pathCache[m][n] = (!!pathCache[m][n-1] ? pathCache[m][n-1] : calculate(m,n-1)) + grid[m][n];
        } else if (n === 0) {
            pathCache[m][n] = (!!pathCache[m-1][n] ? pathCache[m-1][n] : calculate(m-1,n)) + grid[m][n];
        } else {
            pathCache[m][n] =  Math.min(
                (!!pathCache[m-1][n] ? pathCache[m-1][n] : calculate(m-1,n)) + grid[m][n],
                (!!pathCache[m][n-1] ? pathCache[m][n-1] : calculate(m,n-1)) + grid[m][n],
            )
        }

        return pathCache[m][n];
    }

    const rowLength = grid.length;
    const columnLength = grid[0]?.length;

    for (let i = 0; i < rowLength; i++) {
        pathCache.push([]);
        for (let j = 0; j < columnLength; j++) {
            pathCache[i].push(0);
        }
    }
    pathCache[0][0] = grid[0][0];

    if (!rowLength || !columnLength) {
        return 0;
    }

    return calculate(rowLength-1, columnLength-1);
};