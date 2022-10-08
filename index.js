/* Make sum a recursive function that sums all the whole numbers from fromN to toN
 * For this exercise, we can safely assume that fromN will always be less than or equal to toN
 */

const sum = function(fromN, toN) {
  // base case: fromN = toN
  if (fromN === toN) {
    return fromN;
  }

  // call function recursively with the value of toN decreased
  return toN + sum(fromN, toN - 1);

};

console.log(sum(3, 7));

module.exports = sum;
