//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

//Here the complexity is o(n) because we are visiting every single number only once.

var twoSum = function (nums, target) {
    const map = new Map()
    const length = nums.length

    for (let i = 0; i < length; i++) {
        if (map[nums[i]] >= 0) {
            return [map[nums[i]], i]
        }
        map[target - nums[i]] = i;
    }
    return [];
};