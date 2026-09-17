function sum(...args) {
    // Your implementation
    // const arr = [];
    // arr.push(...args);
    // let total = 0;
    // for (let i of arr) {
    //     total += i;
    // }
    // return total;

    const total = args.reduce((sum, curr) => sum + curr, 0)
    return total;
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

module.exports = sum