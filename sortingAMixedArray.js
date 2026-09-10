function customSort(arr) {
  //write your implementation here
  let characters = [];
  let numbers = [];

  //type check and push to the arrays
  for (let i of arr) {
    if (typeof i === "string") characters.push(i);
    else if (typeof i === "number") numbers.push(i);
  }
  // sort the character array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (characters[j] > characters[j + 1])
        [characters[j], characters[j + 1]] = [characters[j + 1], characters[j]];
    }
  }

  //sort the numbers array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1])
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
    }
  }

  return [...characters, ...numbers];
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);
module.exports = customSort;
