// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:
// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:
// Input: nums = [1], target = 0
// Output: 0

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var searchInsert = function (nums, target) {
  //Need a pointer
  //Since we looking at O(log n), we will
  //start pointer at index 0 and compare to target
  //then move pointer to middle of array.
  //compare target to pointer.. is it bigger or smaller?
  //if smaller, move pointer to middle of that scope,
  //if larger, move pointer to middle of the bigger scope
  //will also need 2 points to designate the current scope.
  let scopeStart = 0;
  let scopeEnd = nums.length - 1;
  let pointer = 0;
  console.log(
    "Pointer: " + pointer + ", " + "Scope " + scopeStart + "-" + scopeEnd
  );
};

searchInsert([1, 3, 5, 6], 5);
