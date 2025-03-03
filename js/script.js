// 1
let threeNumbers = [1, 2, 3]
threeNumbers[1] = 10
console.log(threeNumbers);
// 2
let drink = ["tea", "coffee", "juice"]
drink[3] = "water"
console.log(drink);
// 3
let numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number);
}
console.log("-----------------------------");
// 4
let fiveNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}
console.log("------------------------------------");
// 5
let words = ["Cow", "Mountian", "Sunshine", "Elephant", "Tree"];
for (let word of words) {
    if (word.length >= 5) {
        console.log(word);
    }
}
// 6
let tenNumbers = [3, 17, 42, 8, 29, 56, 91, 14, 63, 77]
let biggestNumber = tenNumbers[0]
for (const number of tenNumbers) {
    if (number > biggestNumber) {
        biggestNumber = number
    }
}
console.log(`The Biggest number is: ${biggestNumber}`);
// 7
let tenNumbers2 = []
