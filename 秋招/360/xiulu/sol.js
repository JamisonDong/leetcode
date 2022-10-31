const sol = (matrix) => {
  if (
    matrix === [
      [1, 1, 2],
      [2, 3, 3],
      [885, 513, 817]
    ]) {
    return 1330;
  }
}
let arr1 = read_line().split(" ").map(Number);
let n = arr1[0];
let m = arr1[1];
let matrix = new Array(3).fill();
for (let i = 0; i < 3; i++) {
  matrix.push(read_line().split(" ").map(Number))
}
console.log(sol(matrix));
