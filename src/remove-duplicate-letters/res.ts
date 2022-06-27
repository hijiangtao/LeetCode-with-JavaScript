function removeDuplicateLetters(s: string): string {
    if (s.length <= 1) {
        return s;
    }

    const sList = s.split('');
    const sCountMap: { [key in string]: number } = {};
    sList.map(str => {
        sCountMap[str] = sCountMap[str] ? sCountMap[str]+1 : 1;
    });

    const remainCountMap: { [key in string]: number } = JSON.parse(JSON.stringify(sCountMap));
    const resultCountMap: { [key in string]: number } = {};

    Object.keys(sCountMap).forEach(key => resultCountMap[key] = 0);
    const sStack = [sList[0]];
    resultCountMap[sList[0]] = 1;
    remainCountMap[sList[0]] -= 1;

    for (let i = 1; i < sList.length; i++) {
        const element = sList[i];
        const prevElement = sStack[sStack.length-1];
        if (!resultCountMap[element] && element > prevElement) {
            sStack.push(element);
            remainCountMap[element] -= 1;
            resultCountMap[element] = 1;
        } else if (!resultCountMap[element] && element < prevElement) {
            let currentIndex = sStack.length-1;
            while(currentIndex >= 0) {
                const currentPrevElement = sStack[currentIndex];
                if (currentPrevElement > element && remainCountMap[currentPrevElement]) {
                    currentIndex--;
                } else {
                    break;
                }
            }
            const sStackLength = sStack.length;
            for (let j = currentIndex+1; j < sStackLength; j++) {
                const minusElement = sStack.pop() as string;
                resultCountMap[minusElement]--;
            }
            sStack.push(element);
            remainCountMap[element]--;
            resultCountMap[element]++;
        } else {
            remainCountMap[element]--;
        }
    }

    return sStack.join('');
};