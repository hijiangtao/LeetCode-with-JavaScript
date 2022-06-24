function partition(s: string): string[][] {
    const result = [];
    let answers = [];

    const dfs = (i:number) => {
        if (i === s.length) {
            result.push(answers.slice());
            return ;
        }

        for (let j = i; j < s.length; j++) {
            if (reverseCache[i][j]) {
                answers.push(s.slice(i, j+1));
                dfs(j+1);
                answers.pop();
            }
        }
    }

    const reverseCache = new Array(s.length).fill([]).map(() => new Array(s.length).fill(true));
    for (let i = reverseCache.length; i >= 0; i--) {
        for (let j = i; j < reverseCache.length; j++) {
            if (i === j) {
                reverseCache[i][j] = true;
            } else if (i + 1 === j) {
                reverseCache[i][j] = s[i] === s[j];
            } else {
                reverseCache[i][j] = reverseCache[i+1][j-1] && s[i] === s[j];
            }
        }
    }

    dfs(0);

    return result;
};