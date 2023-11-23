/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr.push(...flatten(item));
    } else {
      newArr.push(item);
    }
  })
  return newArr;
  // if (arr.length === 0) return newArr;
  // if (!Array.isArray(arr[0])) {
  //   newArr.push(arr[0]);
  //   arr.shift()
  //   return flatten(arr);
  // } else {
  //   return flatten(arr[0]);
  // }

}
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3, 4], 6]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
