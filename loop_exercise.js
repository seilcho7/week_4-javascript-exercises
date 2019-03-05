// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

// function printNumbers(start, end) {
//     for (i = start; i <= end; i++) {
//         console.log(i);
//     }
// }
// printNumbers(1, 10);

// function printNumbers(start, end) {
//     let count = start;
//     while (count <= end) {
//         console.log(count);
//         count++;
//     }
// }
// printNumbers(1, 10);

//

// Write a function printSquare which is given a size and prints a square of that size using asterisks.

// function printSquare(size) {
//     let stars = "";
//     for (i = 0; i < size; i++) {
//         for (j = 0; j < size; j++) {
//             stars += "*";
//         }
//         console.log(stars);
//         stars = "";
//     }
// }
// printSquare(5);

// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

// function printBox(width, height) {
//     let row = "";
//     for (i = 1; i <= height; i++) {
//         for (j = 1; j <= width; j++) {
//             if (i === 1 || i === height) {
//                 row += "*";
//             }
//             else if (i > 1 && i < height) {
//                 if (j === 1 || j === width) {
//                     row += "*";
//                 }
//                 else if (j > 1 && j < width) {
//                     row += " ";
//                 }
//             }
//         }
//         console.log(row);
//         row = "";       
//     }
// }
// printBox(10, 10);

// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

// function printBanner(text) {
//     let row = "";
//     for (i = 0; i < 3; i++) {
//         for (j = 0; j < (text.length + 4); j++) {
//             if (i === 0 || i === 2) {
//                 row += "*";
//             }
//             else if (i === 1) {
//                 row = `* ${text} *`;
//             }
//         }
//         console.log(row);
//         row = "";
//     }
// }

// printBanner("Welcome to DigitaCrafts");

// Write a function factors which is given a number and returns an array containing all its factors. What are factors?


