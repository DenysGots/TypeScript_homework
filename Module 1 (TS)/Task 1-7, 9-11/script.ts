/* TASK 1 */

const printString = function(str: string): string {
    return (`Hello, ${str}!`);
};

console.log("TASK 1");
console.log(printString("World"));


/* TASK 2 */

const sum = function(arr: number[]): number {
    return (arr.reduce((a, b) => a + b));
};

const multiply = function(arr: number[]): number {
    return (arr.reduce((a, b) => a * b));
};

console.log("TASK 2");
console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));


/* TASK 3 */

const reverse = function(str: string): string {
    return (str.split('').reverse().join(''));
};

console.log("TASK 3");
console.log(reverse("I am testing"));


/* TASK 4 */

const isPalindrome = function(str: string): boolean {
    return (str === reverse(str));
};

console.log("TASK 4");
console.log(isPalindrome("radar"));


/* TASK 5 */

const histogram = function(arr: number[]): void {
    let result = "";

    console.log("```");

    for (let i = 0, arrLength = arr.length; i < arrLength; i += 1) {
        for (let j = 1; j <= arr[i]; j += 1) {
            result += "*";
        };

        console.log(result);
    };

    console.log("```");
};

console.log("TASK 5");
console.log(histogram([4, 9, 7]));


/* TASK 6 */

const caesarCipher = function(str: string, key: number): string {
    let input: string[] = str.split('');
    let result: string;
    let uncipheredElem: number = 0;
    let cipheredElem: number = 0;

    result = input.map(elem => {
        uncipheredElem = elem.charCodeAt(0);
        cipheredElem = uncipheredElem + key;

        if ((uncipheredElem <= 90 && cipheredElem > 90) || (uncipheredElem <= 122 && cipheredElem > 122)) {
            cipheredElem -= 26;
        } else if ((uncipheredElem <= 90 && cipheredElem < 65) || (uncipheredElem <= 122 && cipheredElem < 97)) {
            cipheredElem += 26;
        };

        return elem = String.fromCharCode(cipheredElem);
    }).join('');

    return result;
};

console.log("TASK 6");
console.log(caesarCipher("def", 3));
console.log(caesarCipher("abc", -3));
console.log(caesarCipher("xyz", 3));


/* TASK 7 */

const diagonalReverse = function(arr: any[]): any[] {
    let reversedArray: any[] = [];

    arr.forEach(() => reversedArray.push([]));

    for (let i = 0, arrLength = arr.length; i < arrLength; i += 1) {
        for (let j = 0, arrLength = arr[i].length; j < arrLength; j += 1) {
            reversedArray[j].push(arr[i][j]);
        };
    };

    return reversedArray;
};

console.log("TASK 7");
console.log(diagonalReverse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(diagonalReverse([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));


/* TASK 9 */

const checkBrackets = function(bracketsSequence: string): void {
    let brackets: any[] = bracketsSequence.split('');
    let leftBracketsNumber: number = brackets.filter(elem => {return elem === "[";}).length;
    let rightBracketsNumber: number = brackets.filter(elem => {return elem === "]";}).length;
    let bracket: object = {"]": "["};
    let openBrackets: any[] = [];
    let isClean: boolean = true;

    if ((brackets.length % 2 !== 0) ||
        (leftBracketsNumber !== rightBracketsNumber) ||
        (!(/^[\[\]]+$/gm).test(bracketsSequence))
    ) {
        console.log(`String is not balanced`);
        return;
    };

    for (let i = 0, len = bracketsSequence.length; isClean && i < len; i += 1) {
        if (bracket[bracketsSequence[i]]) {
            isClean = (openBrackets.pop() === bracket[bracketsSequence[i]]);
        } else {
            openBrackets.push(bracketsSequence[i]);
        };
    };

    if (isClean && !openBrackets.length) {
        console.log(`String is balanced`);
    } else {
        console.log(`String is not balanced`);
    };
};

console.log("TASK 9");
checkBrackets(`][][][][`);
checkBrackets(`[[][][]]`);
checkBrackets(`[[[][[]]]]`);


/* TASK 10 */

const charFreq = function(str: string): object {
    let result: object = {};
    let sequence: string[] = str.split('');

    sequence.forEach(elem => {
        if (!result.hasOwnProperty(elem)) {
            result[elem] = 0;
        };

        if (result.hasOwnProperty(elem)) {
            result[elem] += 1;
        };
    });

    return result;
};

console.log("TASK 10");
console.log(charFreq("abbab"));
console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));


/* TASK 11 */

const decToBin = function(inputNumber: number): string {
    return inputNumber.toString(2);
};

console.log("TASK 11");
console.log(decToBin(1));
console.log(decToBin(10));