import lineReader from "line-reader";

// Part1
let total = 0;
lineReader.eachLine("./days/day1/input.txt", function(line, last) {
  total += Math.floor(+line / 3) - 2;
  if (last) {
    console.log("Part1: ", total);
  }
});
const calculateFuel = (total, fuel) => {
  const consumption = Math.floor(fuel / 3) - 2;

  if (consumption < 1) {
    return total;
  } else {
    total += consumption;
    return calculateFuel(total, consumption);
  }
};
// Part2
let total2 = 0;
lineReader.eachLine("./days/day1/input.txt", function(line, last) {
  const fuel = Math.floor(+line / 3) - 2;
  const tot = calculateFuel(0, fuel);
  total2 += tot + fuel;
  if (last) {
    console.log("Part2: ", total2);
  }
});
