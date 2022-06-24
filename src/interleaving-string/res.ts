function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s3.length !== (s2.length+s1.length)) {
        return false;
    }

    if (s3.length == 1) {
        return s3 === s2 || s1 === s3;
    } else if (s3.length === 0) {
        return s1 === s2 && s1 === '';
    }

    const lastS1 = s1[s1.length-1];
    const lastS2 = s2[s2.length-1];
    const lastS3 = s3[s3.length-1];

    if (lastS3 === lastS1 && isInterleave(s1.slice(0,-1), s2, s3.slice(0,-1), )) {
        return true;
    }

    if (lastS3 === lastS2 && isInterleave(s1, s2.slice(0,-1), s3.slice(0,-1), )) {
        return true;
    }

    return false;
};