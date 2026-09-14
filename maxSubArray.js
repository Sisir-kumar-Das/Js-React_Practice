function maxSubArray(nums) {
  // write your code  here
  let maxSum = Number.NEGATIVE_INFINITY;
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    maxSum = Math.max(maxSum, currSum);

    if (currSum < 0) currSum = 0;
  }

  return maxSum;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
//

module.exports = maxSubArray;
