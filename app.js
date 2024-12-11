//N1

let x = 10;
let y = 3 * Math.pow(x, 6) - 6 * Math.pow(x, 2) - 7;
console.log(y);

//N2

let R = 10;
let π = 3.14;
let L = 2 * π * R;
let S = π * Math.pow(R, 2);
console.log("L= " + L, "S= " + S);

//N3

let a = 5;
let b = 10;
let G = Math.sqrt(a * b);
console.log(G);

//N4

let X = 5;
let A = 10000;
let oneKgPrice = A / X;
let Y = 10;
let priceY = oneKgPrice * Y;
console.log("1kg= " + oneKgPrice, "Ykg= " + priceY);

//N5

let A2 = 5;
let B2 = 10;

console.log("Oldin: A =", A2, ", B =", B2);

let changed = A2;
A2 = B2;
B2 = changed;

console.log("Keyin: A =", A2, ", B =", B2);

//N6
let num = 15;
let onliklar = num / 10;
let birliklar = num % 10;
let sum = onliklar + birliklar;
console.log(
    "o'nlik: " + onliklar,
    "birlik: " + birliklar,
    "yig'indisi: " + sum
);

// N7
let number = 254;
let yuzliklar = number / 100;
let firstDigit = parseInt(Array.from(number.toString())[0]);
console.log("yuzliklar xonasidagi raqam: " + firstDigit);

//N8

let N2 = 10000;
let hours = N2 / 3600;
let minutes = (N2 % 3600) / 60;
let seconds = N2 % 60;

console.log(`Kun boshidan ${N2} sekund o'tganidan so'ng:`);
console.log(`Soat: ${hours}`);
console.log(`Minut: ${minutes}`);
console.log(`Sekund: ${seconds}`);

//N9

let x2 = 10;
let y2 = 4 * Math.pow(x - 3, 6) - 7 * Math.pow(x - 3, 3) + 2;
console.log("y= " + y2);

//N10
let A1 = 5;
console.log(`3-darajasi: ${Math.pow(A1, 3)}`);
console.log(`6-darajasi: ${Math.pow(A1, 6)}`);
console.log(`9-darajasi: ${Math.pow(A1, 9)}`);
console.log(`15-darajasi: ${Math.pow(A1, 15)}`);

//PART 2
//N1
let number1 = 121;

let hundreds = Math.floor(number1 / 100);
let ones = number1 % 10;

if (hundreds == ones) {
    console.log(
        `Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil: ${number1}`
    );
} else {
    console.log(
        `Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil emas: ${number1}`
    );
}

//N2
let number2 = 321;

let hundreds2 = Math.floor(number2 / 100);
let tens2 = Math.floor((number2 % 100) / 10);
let ones2 = number2 % 10;

if (
    (hundreds2 < tens2 && tens2 < ones2) ||
    (hundreds2 > tens2 && tens2 > ones2)
) {
    console.log(
        `Ushbu sonning raqamlari ketma-ket o'suvchi yoki kamayuvchi ketma-ketlikka ega: ${number2}`
    );
} else {
    console.log(
        `Ushbu sonning raqamlari ketma-ket o'suvchi yoki kamayuvchi ketma-ketlikka ega emas: ${number2}`
    );
}

//N3
let number3 = 4;

if (number3 >= 10 && number3 <= 99 && number3 % 2 == 0) {
    console.log(`Berilgan son ikki xonali juft son: ${number3}`);
} else {
    console.log(`Berilgan son ikki xonali juft son emas: ${number3}`);
}

//N4
let number4 = 234;

if (number4 >= 100 && number4 <= 999 && number4 % 2 !== 0) {
    console.log("Berilgan son uch xonali toq son");
} else {
    console.log("Berilgan son uch xonali toq son emas");
}

//N5
let A3 = 5; // Misol sonlar
let B3 = -3;
let C3 = 7;

let musbat = 0;

if (A3 > 0) musbat++;
if (B3 > 0) musbat++;
if (C3 > 0) musbat++;

if (musbat == 2) {
    console.log("A, B, C sonlardan faqat ikkitasi musbat son.");
} else {
    console.log("A, B, C sonlardan faqat ikkitasi musbat son emas.");
}

//N6
let num2 = 1;

if (num2 >= 10 && num2 <= 99 && num2 % 2 === 0) {
    console.log("Berilgan son ikki xonali juft son");
} else {
    console.log("Berilgan son ikki xonali juft son emas");
}

//N7
let a3 = 3;
let b3 = 2;

if ((a3 % 2 !== 0 && b3 % 2 == 0) || (a3 % 2 == 0 && b3 % 2 !== 0)) {
    console.log("A va B sonlarning faqat bittasi toq son.");
} else {
    console.log("A va B sonlarning faqat bittasi toq son emas.");
}

//N8
let num3 = 122;

let hundreds3 = Math.floor(num3 / 100);
let tens3 = Math.floor((num3 % 100) / 10);
let ones3 = num3 % 10;

if (hundreds3 !== tens3 && hundreds3 !== ones3 && tens3 !== ones3) {
    console.log("Ushbu sonning barcha raqamlari har xil.");
} else {
    console.log("Ushbu sonning barcha yoki ikkita raqami takrorlangan.");
}

//N9
let A4 = -5;
let B4 = 3;
let C4 = -7;

let positiveCount = 0;

if (A4 > 0) positiveCount++;
if (B4 > 0) positiveCount++;
if (C4 > 0) positiveCount++;

if (positiveCount == 1) {
    console.log("A, B, C sonlaridan faqat bittasi musbat son.");
} else {
    console.log("A, B, C sonlaridan faqat bittasi musbat son emas.");
}

//N10
let number5 = 123;

let hundreds5 = Math.floor(number5 / 100);
let tens5 = Math.floor((number5 % 100) / 10);
let ones5 = number5 % 10;

if (hundreds5 < tens5 && tens5 < ones5) {
    console.log("Ushbu sonning raqamlari ketma-ket o'suvchi bo'lib joylashgan.");
} else {
    console.log(
        "Ushbu sonning raqamlari ketma-ket o'suvchi bo'lib joylashmagan."
    );
}