function getProductsOfAllIntsExceptAtIndex(intArray) {
  //initialize output array
  let output = [];
  let currentProduct = 1;
  //iterate through intarray foreward
  for (var i = 0; i < intArray.length; i++) {
    //push product before current to output array
    output[i] = currentProduct;
    currentProduct = currentProduct * intArray[i];
  }
  currentProduct = 1;
  for (var i = intArray.length - 1; i >= 0; i--) {
    //iterate backwards
    //multiply output array by product after
    output[i] = output[i] * currentProduct;
    currentProduct = currentProduct * intArray[i]
  }
  //return
  return output;
}

// i - array of integers
// o - return an array of integers - product of everything except the current index
// e- 
// c- 

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]))
console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 6, 5, 9]))
console.log(getProductsOfAllIntsExceptAtIndex([4, 9, 0, 2 ]))
console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 0, 0, 4]))
console.log(getProductsOfAllIntsExceptAtIndex([0]))