
/*
* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
* The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
* The remaining elements of nums are not important as well as the size of nums.
Return k.
* */

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