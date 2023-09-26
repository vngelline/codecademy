let input = "How many are there? Thirty six, counted them myself.";
let vowels = ["a", "e", "i", "o"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
