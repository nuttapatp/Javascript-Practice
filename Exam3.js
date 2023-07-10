function calculateOutput(input) {
    let num = input;
  
    while (num >= 10) {
      let product = 1;
  
      // Calculate the product of digits in the current number
      while (num > 0) {
        product *= num % 10;
        num = Math.floor(num / 10);
      }
  
      num = product;
    }
  
    return num;
  }
  
  console.log(calculateOutput(39));   // Output: 4
  console.log(calculateOutput(999));  // Output: 2
