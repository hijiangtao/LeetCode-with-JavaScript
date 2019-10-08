/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const arrLen = secret.length;
    let strA = 0;
    let strB = 0;
    let secMap = new Array(10);
    let gueMap = new Array(10);

    for (let index = 0; index < arrLen; index++) {
      if (secret[index] === guess[index]) {
        strA++;
      } else {
        const secNum = parseInt(secret[index]);
        const guenum = parseInt(guess[index]);

        (secMap[secNum] ? secMap[secNum] += 1 : secMap[secNum] = 1);
        (gueMap[guenum] ? gueMap[guenum] += 1 : gueMap[guenum] = 1);
      }
    }

    for (let index = 0; index < 10; index++) {
      strB += (secMap[index] && gueMap[index] && (secMap[index] > gueMap[index] ? gueMap[index] : secMap[index]) || 0);
    }

    // console.log(secMap, gueMap);

    return `${strA}A${strB}B`;
};