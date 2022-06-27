function canCompleteCircuit(gas: number[], cost: number[]): number {
    const rest = gas.map((gasItem, i) => gasItem - cost[i]);
    let remain = 0;
    let startIndex = 0;

    if (rest.reduce((p,c) => p+c, 0) < 0) {
        return -1;
    }

    let count = rest.length;
    for (let i = 0; ; ) {
        if (remain + rest[i] < 0) {
            remain = 0;
            i = (i+1)  % rest.length;
            startIndex = i;
            count  =rest.length;
        } else {
            remain += rest[i];
            i = (i+1)  % rest.length;
            count--;

            if (!count && remain >= 0) {
                break;
            }
        }
    }

    return startIndex;
};