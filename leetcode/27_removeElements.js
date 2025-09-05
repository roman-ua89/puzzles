
var removeElements = function(nums, val) {
  let k = 0; // Pointer for the next position to place a valid element


  for (let i = 0; i < nums.length; i++) {

    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

const arr = [3,2,2,3];
const k = removeElements(arr, 3);
console.log('k', k);
console.log('arr after', arr);