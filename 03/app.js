const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(a, b, c) {
  const NumberArray = [
    parseInt(Number(a)),
    parseInt(Number(b)),
    parseInt(Number(c)),
  ];

  const tempArray = NumberArray.filter(
    (number) => number !== Math.max(...NumberArray)
  );

  return Math.max(...NumberArray) + Math.max(...tempArray);
}

const isEven = function (a) {
  if (!isNaN(a)) {
    return a % 2 == 0 ? true : false;
  } else {
    return null;
  }
};

function showInfo(val, type) {
  switch (type) {
    case null:
      console.log(`Podany argunemt ${val} nie jest liczbą`);
      break;
    case true:
      console.log(`Podany argunemt ${val} jest parzysty`);
      break;
    case false:
      console.log(`Podany argunemt ${val} jest nieprzysty`);
      break;
    default:
      console.log("default");
  }
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const sum = getSum(a, b, c);

const even = isEven(sum);

showInfo(sum, even);
