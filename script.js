function funcDevided(n, k) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        if (i % k === 0) {
            result = result + i + ', ';
        }
    }

    return console.log(result);
}
funcDevided(20, 3);