function isValid(s: string): boolean {
    const sLength = s.length;
    if (sLength < 2) {
        return !sLength;
    }

    let stack: string[] = [s[0]];

    for (let i = 1; i < sLength; i++) {
        const current = s[i];
        if (['{', '(', '['].includes(current)) {
            stack.push(current);
        } else if (['}', ')', ']'].includes(current)) {
            const matchedList = ['{}', '()', '[]'];
            if (matchedList.includes(stack[stack.length-1] + current)) {
                stack.pop();
            } else if (stack.length) {
                break;
            } else {
                stack.push(current);
            }
        }
    }

    return stack.length === 0;
};