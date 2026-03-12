function composePipeline(fns) {
    return function(initial) {
        let result = initial;
        for (const fn of fns) {
            result = fn(result);
        }
        return result;
    };
}

// Test Code for Task 3
const add2 = x => x + 2;
const sqr = x => x * x;
const half = x => x / 2;
const pipeline = composePipeline([add2, sqr, half]);
console.log(pipeline(4));