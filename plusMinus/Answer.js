'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let arrLen = arr.length
    
    let positive =0
    let negative =0
    let zero = 0
    
    arr.forEach(function(number){
        number = parseInt(number)
        if (number < 0 ) {negative++}
        else if (numver > 0) {positive++}
        else {zero++}
    })
    
    console.log((positive / arrLen).toPrecision(6))
    console.log((negative / arrLen).toPrecision(6))
    console.log((zero / arrLen).toPrecision(6))

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
