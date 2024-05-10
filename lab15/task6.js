let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let { names: [, name2, , name4], ages: [, age2, , age4] } = data;

console.log(name2); 
console.log(age2); 
console.log(name4); 
console.log(age4); 