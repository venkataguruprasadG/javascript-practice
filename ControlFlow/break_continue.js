for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 7) {
        break;
    }
}

for (let j = 1; j <= 10; j++) {
    if (j == 5) {
        continue;
    }
    console.log(j);
}

for (let k = 1; k <= 20; k++) {
    if (k % 2 == 0) {
        continue
    }
    if (k == 15) {
        break;
    }
    console.log(k);
}