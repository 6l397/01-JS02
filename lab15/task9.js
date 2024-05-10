function mapBuilder(keysArray, valuesArrays) {
    const map = new Map();
    for (let i = 0; i < keysArray.length; i++) {
      map.set(keysArray[i], valuesArrays[i]);
    }
    return map;
  }
  
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  let map = mapBuilder(keys, values);
  console.log(map.size); 
  console.log(map.get(2)); 