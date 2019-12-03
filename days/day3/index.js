import fs from "fs";

// const input = fs.readFileSync("./days/day3/input.txt", "utf8");
const input = `R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`;

const lines = input.split("\n");

const lines1 = lines[0].split(",");
const lines2 = lines[1].split(",");

const distances = [];
const step = [];

const getLines = lines => {
  let x = 0,
    y = 0,
    steps = 0;
  return lines.map(line => {
    steps += +line.substr(1);
    switch (line.substr(0, 1)) {
      case "U":
        return `${x},${y}:${x},${(y += +line.substr(1))}s${steps}`;
      case "D":
        return `${x},${y}:${x},${(y -= +line.substr(1))}s${steps}`;

      case "L":
        return `${x},${y}:${(x -= +line.substr(1))},${y}s${steps}`;
      case "R":
        return `${x},${y}:${(x += +line.substr(1))},${y}s${steps}`;
    }
  });
};

const lineArray1 = getLines(lines1);
const lineArray2 = getLines(lines2);

const getIntersection = (line1, line2) => {
  const line1x1 = +line1
    .split(":")[0]
    .split(",")[0]
    .split("s")[0];

  const line1x2 = +line1
    .split(":")[1]
    .split(",")[0]
    .split("s")[0];

  const line2x1 = +line2
    .split(":")[0]
    .split(",")[0]
    .split("s")[0];
  const line2x2 = +line2
    .split(":")[1]
    .split(",")[0]
    .split("s")[0];

  const line1y1 = +line1
    .split(":")[0]
    .split(",")[1]
    .split("s")[0];
  const line1y2 = +line1
    .split(":")[1]
    .split(",")[1]
    .split("s")[0];

  const line2y1 = +line2
    .split(":")[0]
    .split(",")[1]
    .split("s")[0];
  const line2y2 = +line2
    .split(":")[1]
    .split(",")[1]
    .split("s")[0];

  if (
    intersects(
      line1x1,
      line1y1,
      line1x2,
      line1y2,
      line2x1,
      line2y1,
      line2x2,
      line2y2
    )
  ) {
    if (line1x1 === line1x2) {
      distances.push(Math.abs(+line1x1) + Math.abs(+line2y1));
      step.push(
        +line1.split("s")[1] +
          +line2.split("s")[1] -
          Math.abs(Math.abs(line1y2 - line2y1)) -
          Math.abs(Math.abs(line2x2 - line1x1))
      );
    } else {
      distances.push(Math.abs(+line1y1) + Math.abs(+line2x1));
      step.push(
        +line1.split("s")[1] +
          +line2.split("s")[1] -
          Math.abs(Math.abs(line1x2 - line2x1)) -
          Math.abs(Math.abs(line2y2 - line1y1))
      );
    }
  }
};

function intersects(a, b, c, d, p, q, r, s) {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
  }
}

lineArray1.forEach(line => {
  lineArray2.forEach(line2 => {
    getIntersection(line, line2);
  });
});

console.log(distances.sort()[0]);
console.log(step.sort());
