const transpose = function (matrix) {
  let newArr = [];
  for (let x = 0; x < matrix[0].length; x++) {
    const column = [];
    for (let y = 0; y < matrix.length; y++) {
      column.push(matrix[y][x]);
    }
    newArr.push(column);
  }
  return newArr;
};

const wordSearch = (letters, word) => {
    if (letters.length === 0) return undefined;
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l === word) return true;
  }
  const flipped = transpose(letters).map((ls) => ls.join(""));
  for (l of flipped) {
   if (l === word) return true;
  }
  return false;
};
wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "FRANK"
);

module.exports = wordSearch;
