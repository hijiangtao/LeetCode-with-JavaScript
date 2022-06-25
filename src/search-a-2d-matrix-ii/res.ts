function searchMatrix(matrix: number[][], target: number): boolean {
    const visitedMatrix: boolean[][] = [];

    if (!matrix.length) {
        return false;
    }

    const rowLength = matrix.length;
    const columnLength = matrix[0].length;

    for (let i = 0; i < rowLength; i++) {
        visitedMatrix.push([]);
        for (let j = 0; j < columnLength; j++) {
            visitedMatrix[i].push(false);
        }
    }

    const dfs = (i:number, j:number): boolean => {
        if (matrix[i][j] > target || visitedMatrix[i][j]) {
            return false;
        }

        visitedMatrix[i][j] = true;
        if (matrix[i][j] === target) {
            return true;
        } else {
            return i < (rowLength - 1) && dfs(i+1, j) || j < (columnLength - 1) && dfs(i, j + 1);
        }
    }

    return dfs(0, 0);
};