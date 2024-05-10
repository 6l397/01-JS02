function mul(...numbers) {
    if (!numbers.some(num => typeof num === 'number')) {
      return 0;
    }
    return numbers.reduce((product, number) => {
      if (typeof number === 'number') {
        return product * number;
      }
      return product;
    }, 1);
  }
  
  console.log(mul(1, "str", 2, 3, true)); 
  console.log(mul(null, "str", false, true)); 