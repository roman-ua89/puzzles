/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n]
};

// i = 3;
// dp[3] = 2 + 1 = 3;
// dp[4] = 3 + 2 = 5;
// dp[5] = 5 + 3 = 8;

const res1 = climbStairs(2);
console.log('res1', res1); // 2 ways

const res2 = climbStairs(3);
console.log('res2', res2); // 3 ways

const res3 = climbStairs(4);
console.log('res3', res3); // 5 ways

const res4 = climbStairs(5);
console.log('res4', res4); // 8 ways