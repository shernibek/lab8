let lab1 = [5, 5, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4 = [10];
let lab5 = [5, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let quiz1 = [38];
let sum1 = lab1[0] + lab1[1] + lab1[2] + lab1[3] + lab1[4] + lab1[5];
let sum2 = lab2[0] + lab2[1] + lab2[2] + lab2[3] + lab2[4] + lab2[5] + lab2[6];
let sum3 = lab3[0] + lab3[1] + lab3[2] + lab3[3];
let sum4 = lab4[0];
let sum5 = lab5[0] + lab5[1] + lab5[2] + lab5[3] + lab5[4] + lab5[5] + lab5[6] + lab5[7] + lab5[8] + lab5[9];
let sum6 = lab6[0] + lab6[1] + lab6[2] + lab6[3] + lab6[4] + lab6[5];
let sums = [sum1, sum2, sum3, sum4, sum5, sum6];

var s;
s = 0;
sums.forEach((x) => {s += x});
s /= sums.length;

let total_score = 0.6 * (s) + 0.4 * (quiz1);

const results = {
    lab1: lab1, // array of scores for lab1
    lab2: lab2, // array of scores for lab2
    lab3: lab3, // array of scores for lab3
    lab4: lab4, // array of scores for lab4
    lab5: lab5, // array of scores for lab5
    lab6: lab6, // array of scores for lab6
    quiz1: quiz1, // score of quiz1
    sums: sums, // array of sums of each lab
    total_score: total_score, // computed total score
}

console.log(results)
