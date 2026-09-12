function removeDuplicates(arr) {
  // your code here
  if (!arr.length) return [];

  // for (let i = 0; i < arr.length; i++){
  //   for (let j = i + 1; j < arr.length; j++){
  //     if (arr[i] === arr[j]) {
  //       arr.splice(j, 1);
  //       j--;
  //     }
  //   }
  // }
  // return arr;

  let seen = new Set();
  let result = [];

  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }    
  }

  return result;
}
removeDuplicates([1, 2, 2, 3, 4, 4])
module.exports = removeDuplicates;
