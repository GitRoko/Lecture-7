let n = prompt('input n');
let k = prompt('input k');

function funcDevided(n, k) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        if (i % k === 0) {
            result = result + i + ', ';
        }
    }

    return console.log(result);
}

if (typeof n === Object || typeof k === Object) {
    alert('ERROR! Input n and k!');
} else funcDevided(n, k);
