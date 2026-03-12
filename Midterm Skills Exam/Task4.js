const memo = {};
function power(base, exp) {
    const key = `${base},${exp}`;
    if (memo[key] !== undefined) return memo[key];

    let result;
    if (exp === 0) {
        result = 1;
    } else if (exp < 0) {
        result = 1 / power(base, -exp);
    } else if (exp % 2 === 0) {
        const half = power(base, exp / 2);
        result = half * half;
    } else {
        result = base * power(base, exp - 1);
    }

    memo[key] = result;
    return result;
}

// Test Code for Task 4
console.log(power(2, 5));
console.log(power(2, -2));
