/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/
//returns nothing
// function subsets(arr) {
//   // let sets = [[]];
//   // let lastInArr = arr[arr.length - 1];
//   // let lastInSets = sets[sets.length - 1];
//   // if (lastInArr === lastInSets) return sets; //base case
//   // arr.forEach((item) => {
//   //   if (!sets.includes([item])) sets.push([item]);
//   // });
//   // return sets;
//   let results = [[]];
//   if (arr.length === 0) {
//     return [];
//   } else {
//     arr.forEach((item) => {
//       results.push(...subsets(arr).concat(item));
//       arr.unshift();
//     })


//   }
//   return results;
// }


//works
// const subsets = (xs, ...ys) => (
//   xs.length === 0 ? [ys] : [
//     subsets(xs.slice(0, -1), ...ys),
//     subsets(xs.slice(0, -1), xs[xs.length - 1], ...ys)
//   ].flat()
// );

const subsets = (arr, ...ys) => (
  arr.length === 0 ? [ys] : [
    subsets(arr.slice(0, -1), ...ys),
    subsets(arr.slice(0, -1), arr[arr.length - 1], ...ys)
  ].flat()
);


// const subsets = ([x, ...xs], ys = []) =>
//   x == undefined
//     ? [ys]
//   : [...subsets (xs, ys), ...subsets (xs, [...ys, x])]

// const subsets = (arr, prefix=[], set=[[]]) => {
//   if(arr.length === 0) return// Base case, end recursion

//   for (let i = 0; i < arr.length; i++) {
//       set.push(prefix.concat(arr[i]))// If a prefix comes through, concatenate value
//       subsets(arr.slice(i + 1), prefix.concat(arr[i]), set)
//       // Call function recursively removing values at or before i and adding
//       // value at i to prefix
//   }
//   return set
// }



console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]
console.log(subsets([1, 2]))// [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
