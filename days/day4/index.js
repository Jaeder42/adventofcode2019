const min = 246540;
const max = 787419;

let total = 0;

const has2 = array => {
  let lastFound = 0;
  let any = false;
  let cond = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      if (array[i] === lastFound) {
        cond[lastFound] = false;
      } else {
        cond[array[i]] = true;
      }
      lastFound = array[i];
    }
  }
  if (cond.find(c => c)) {
    return true;
  }
  return false;
};

for (let i = min; i <= max; i++) {
  const array = `${i}`.split("");
  const sorted = [...array].sort();
  if (array.toString() == sorted.toString()) {
    if (has2(array)) {
      total++;
    }
  }
}

console.log(total);
