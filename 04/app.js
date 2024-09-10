function createArray(min, max) {
  let randomArray = [];

  for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    randomArray.push(randomNumber);
  }

  return randomArray;
}

function getLargest(arr) {
  let resultArr = arr.sort((a, b) => a - b);
  return resultArr.slice(10).reverse();
}

function getAvg(arr) {
  let initVal = 0;
  let sum = arr.reduce((acc, val) => acc + val, initVal);
  return sum / arr.length;
}

let resultArr = createArray(1, 200);
let largest = getLargest(resultArr);
let avg = getAvg(largest);

console.log(`wygenerowana tablica: ${resultArr}`);
console.log(`10 największych wartości: ${largest}`);
console.log(`średnia z 10 największych wartości to : ${avg}`);
