/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = [];
  for (let c of s.split(" ")) {
    if (c !== "") {
      res.unshift(c)
    }
  }
  return res.join(" ");
};


console.log(reverseWords("a good   example"));