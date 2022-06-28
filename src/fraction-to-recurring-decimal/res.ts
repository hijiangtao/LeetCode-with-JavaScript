function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) {
        return '0';
    }

    let result: string[] = [];
    const remainderMap: { [key in number]: number } = {};

    if (numerator * denominator < 0) {
        result.push('-');
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    const integerPart = Math.floor(numerator / denominator);
    result.push(String(integerPart), '.');
    numerator = (numerator % denominator) * 10;

    while (numerator && numerator < denominator) {
        result.push('0');
        remainderMap[numerator] = result.length - 1;
        numerator *= 10;
    }

    let currentRemainder = numerator;
    while (currentRemainder) {
        if (remainderMap[currentRemainder]) {
            const remainderIndex = remainderMap[currentRemainder];
            const remainderRepeatString = result.slice(remainderIndex).join('');
            result = [...result.slice(0, remainderIndex), '(', remainderRepeatString, ')'];
            break;
        } else {
            const newRemainder = currentRemainder % denominator;
            const divideItem = Math.floor(currentRemainder / denominator);
            remainderMap[currentRemainder] = result.length;
            result.push(divideItem.toString());
            currentRemainder = newRemainder * 10;
        }
    }

    if (result[result.length-1] === '.' || result.indexOf('.') === 0) {
        return result.join('').replace('.', '');
    }

    return result.join('');
};