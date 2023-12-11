// Number.prototype.isPrime = () => {
//     for (let i = 2; i < this; i++) {
//         if (this % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // por razones matemáticas, 1 se considera primo
// while (primeCount < 1e4) {
//     if (num.isPrime()) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);


// Number.prototype.isPrime = function () {
//     if (this <= 1) {
//         return false;
//     }
//     if (this <= 3) {
//         return true;
//     }
//     if (this % 2 === 0 || this % 3 === 0) {
//         return false;
//     }

//     for (let i = 5; i * i <= this; i += 6) {
//         if (this % i === 0 || this % (i + 2) === 0) {
//             return false;
//         }
//     }
//     return true;
// };


// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // por razones matemáticas, 1 se considera primo
// while (primeCount < 1e6) {
//     if (num.isPrime()) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);



// function rFib(n) {

//     if (n < 2) {
//         return n;
//     }
//     return rFib(n - 1) + rFib(n - 2);
// }



// const { performance } = require('perf_hooks');
// const start = performance.now();

// // iterative
// function iFib(n) {
//     const vals = [0, 1];
//     while (vals.length - 1 < n) {
//         let len = vals.length;
//         vals.push(vals[len - 1] + vals[len - 2]); 
//     }
//     return vals[n];
// }
// console.log(iFib(20));
// console.log(`This took ${performance.now() - start} milliseconds to run`);



const { performance } = require('perf_hooks');
const start = performance.now();

function reverseStringRecursive(str) {
    if (str === "") {
        return str;
    } else {
        return reverseStringRecursive(str.substr(1)) + str[0];
    }
}

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed = reverseStringRecursive(story);


// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split('').reverse().join("")

console.log(reversed)
console.log(`This took ${performance.now() - start} milliseconds to run`);
