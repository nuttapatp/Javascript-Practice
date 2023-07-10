function findTwoSum(nums, target) {
    const map = new Map(); 
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (map.has(complement)) {
     
        const complementIndex = map.get(complement);
        return [complementIndex, i];
      }
  
      map.set(nums[i], i); 
    }
  
    return []; 
  }
  
  console.log(findTwoSum([2, 7, 11, 15], 9)); 
  console.log(findTwoSum([3, 2, 4], 6)); 
  