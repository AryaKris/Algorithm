//running sum is the sum of all of the elements from index 0 to index i inclusive. 
//Input: nums = [1, 2, 3, 4]
//Output: [1, 3, 6, 10]

var runningSum = function(nums){
    let result = [];
    let currentSum = 0;
    for (let i=0;i<nums.length;i++);
    let cv = nums[i];
    currentSum+=cv;
    result.push(currentSum);

return result;
};