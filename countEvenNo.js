function countEvens(arr) {
  // your solution here
   if (!Array.isArray(arr)) {
    return false;
  }

  let count = 0;

  for (const element of arr) {
    // 2. Return false for non-numbers, NaN, Infinity, or -Infinity
    if (typeof element !== 'number' || !Number.isFinite(element)) {
      return false;
    }

    // 3. Count only numbers that are integers and divisible by 2
    if (Number.isInteger(element) && element % 2 === 0) {
      count++;
    }
  }

  return count;
}

module.exports = { countEvens };