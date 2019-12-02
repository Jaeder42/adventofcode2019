import fs from "fs";
const input = fs.readFileSync("./days/day2/input.txt", "utf8");

let programArray = input.split(",");
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    programArray = input.split(",");
    // Part1 setup

    // programArray[1] = 12;
    // programArray[2] = 2;
    programArray[1] = i;
    programArray[2] = j;

    let programIndex = 0;

    while (+programArray[programIndex] !== 99) {
      if (+programArray[programIndex] === 1) {
        programArray[programArray[programIndex + 3]] =
          +programArray[+programArray[programIndex + 1]] +
          +programArray[+programArray[programIndex + 2]];
      } else if (+programArray[programIndex] === 2) {
        programArray[programArray[programIndex + 3]] =
          +programArray[+programArray[programIndex + 1]] *
          +programArray[+programArray[programIndex + 2]];
      } else {
        console.error("WAT", +programArray[programIndex]);
      }
      programIndex += 4;
    }

    if (+programArray[0] === 19690720) {
      console.log("DONE", programArray[0], i, j);
      console.log("Result", 100 * i + j);
      break;
    }
  }
}
// console.log(programArray.toString());
