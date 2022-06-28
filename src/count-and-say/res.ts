function countAndSay(n: number): string {
    let result = '1';

    for (let i = 1; i < n; i++) {
        let newResult: string = '';
        let stackList: string[] = result.split('');

        let currentCount = 1;
        let currentChar = stackList[0];
        for (let j = 1; j < stackList.length; j++) {
            if (currentChar === stackList[j]) {
                currentCount++;
            } else {
                newResult += `${currentCount}${currentChar}`;
                currentChar = stackList[j];
                currentCount = 1;
            }
        }

        if (currentCount) {
            newResult += `${currentCount}${currentChar}`;
        }

        result = newResult;
    }

    return result;
};