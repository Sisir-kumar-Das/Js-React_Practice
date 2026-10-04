function isPowerOfTwo(n) {
  if (!Number.isInteger(n) || n <= 0) return false;

  let low = 0,
    high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const val = 2 ** mid;

    if (val === n) return true;
    if (val < n) low = mid + 1;
    else high = mid - 1;
  }

  return false;
}
//

module.exports = { isPowerOfTwo };
