// Решите эти задачи сначала через цикл while, а затем через цикл for.
// 1. Выведите столбец чисел от 1 до 100.

let a = 0;

while (a < 100) {
    a = a + 1;
    console.log(a);
}

for (let a1 = 1; a1 <= 100; a1++) {
    console.log(a1);
}

// // // 2. Выведите столбец чисел от 11 до 33.

let b = 11;

while (b < 33) {
    b = b + 1;
    console.log(b);
}

for (let b1 = 11; b1 <= 33; b1++) {
    console.log(b1);
}

// // 3. Выведите столбец четных чисел в промежутке от 0 до 100.

let c = 0;

for (c; c < 100;) {
    c++;
    if (c % 2 === 0) {
        console.log(c);
    } else {
        continue
    }
} 

let c1 = 0;

while (c1 < 100) {
    c1++;
    if (c1 % 2 === 0) {
        console.log(c1);
    } else {
        continue
    }
}

// // 4. С помощью цикла найдите сумму чисел от 1 до 100

let k = 0;
let k1 = 0;

for (k; k <= 100;k++) {
    k1 = k1 + k;
    // console.log(k1);
}
console.log(k1);

let p = 0;
let p1 = 0;

while (p < 100) {
    p++;
    p1 += p
    // console.log(p1);
}
console.log(p1);