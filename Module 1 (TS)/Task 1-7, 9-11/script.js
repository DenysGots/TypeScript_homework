/* TASK 1 */
var printString = function (str) {
    return ("Hello, " + str + "!");
};
console.log("TASK 1");
console.log(printString("World"));
/* TASK 2 */
var sum = function (arr) {
    return (arr.reduce(function (a, b) { return a + b; }));
};
var multiply = function (arr) {
    return (arr.reduce(function (a, b) { return a * b; }));
};
console.log("TASK 2");
console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));
/* TASK 3 */
var reverse = function (str) {
    return (str.split('').reverse().join(''));
};
console.log("TASK 3");
console.log(reverse("I am testing"));
/* TASK 4 */
var isPalindrome = function (str) {
    return (str === reverse(str));
};
console.log("TASK 4");
console.log(isPalindrome("radar"));
/* TASK 5 */
var histogram = function (arr) {
    var result = "";
    console.log("```");
    for (var i = 0, arrLength = arr.length; i < arrLength; i += 1) {
        for (var j = 1; j <= arr[i]; j += 1) {
            result += "*";
        }
        ;
        console.log(result);
    }
    ;
    console.log("```");
};
console.log("TASK 5");
console.log(histogram([4, 9, 7]));
/* TASK 6 */
var caesarCipher = function (str, key) {
    var input = str.split('');
    var result;
    var uncipheredElem = 0;
    var cipheredElem = 0;
    result = input.map(function (elem) {
        uncipheredElem = elem.charCodeAt(0);
        cipheredElem = uncipheredElem + key;
        if ((uncipheredElem <= 90 && cipheredElem > 90) || (uncipheredElem <= 122 && cipheredElem > 122)) {
            cipheredElem -= 26;
        }
        else if ((uncipheredElem <= 90 && cipheredElem < 65) || (uncipheredElem <= 122 && cipheredElem < 97)) {
            cipheredElem += 26;
        }
        ;
        return elem = String.fromCharCode(cipheredElem);
    }).join('');
    return result;
};
console.log("TASK 6");
console.log(caesarCipher("def", 3));
console.log(caesarCipher("abc", -3));
console.log(caesarCipher("xyz", 3));
/* TASK 7 */
var diagonalReverse = function (arr) {
    var reversedArray = [];
    arr.forEach(function () { return reversedArray.push([]); });
    for (var i = 0, arrLength = arr.length; i < arrLength; i += 1) {
        for (var j = 0, arrLength_1 = arr[i].length; j < arrLength_1; j += 1) {
            reversedArray[j].push(arr[i][j]);
        }
        ;
    }
    ;
    return reversedArray;
};
console.log("TASK 7");
console.log(diagonalReverse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(diagonalReverse([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
/* TASK 9 */
var checkBrackets = function (bracketsSequence) {
    var brackets = bracketsSequence.split('');
    var leftBracketsNumber = brackets.filter(function (elem) { return elem === "["; }).length;
    var rightBracketsNumber = brackets.filter(function (elem) { return elem === "]"; }).length;
    var bracket = { "]": "[" };
    var openBrackets = [];
    var isClean = true;
    if ((brackets.length % 2 !== 0) ||
        (leftBracketsNumber !== rightBracketsNumber) ||
        (!(/^[\[\]]+$/gm).test(bracketsSequence))) {
        console.log("String is not balanced");
        return;
    }
    ;
    for (var i = 0, len = bracketsSequence.length; isClean && i < len; i += 1) {
        if (bracket[bracketsSequence[i]]) {
            isClean = (openBrackets.pop() === bracket[bracketsSequence[i]]);
        }
        else {
            openBrackets.push(bracketsSequence[i]);
        }
        ;
    }
    ;
    if (isClean && !openBrackets.length) {
        console.log("String is balanced");
    }
    else {
        console.log("String is not balanced");
    }
    ;
};
console.log("TASK 9");
checkBrackets("][][][][");
checkBrackets("[[][][]]");
checkBrackets("[[[][[]]]]");
/* TASK 10 */
var charFreq = function (str) {
    var result = {};
    var sequence = str.split('');
    sequence.forEach(function (elem) {
        if (!result.hasOwnProperty(elem)) {
            result[elem] = 0;
        }
        ;
        if (result.hasOwnProperty(elem)) {
            result[elem] += 1;
        }
        ;
    });
    return result;
};
console.log("TASK 10");
console.log(charFreq("abbab"));
console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
/* TASK 11 */
var decToBin = function (inputNumber) {
    return inputNumber.toString(2);
};
console.log("TASK 11");
console.log(decToBin(1));
console.log(decToBin(10));
