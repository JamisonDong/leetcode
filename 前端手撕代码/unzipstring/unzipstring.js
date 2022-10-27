// 速记内容还原：
// 有一种速记方式，针对重复内容有一套独特的缩写规则：
// 重复的部分会被以 "(重复内容)<重复次数>" 形式记录，并且可能存在嵌套缩写关系。不重复的部分按照原样记录。
// 现给一个符合此速记方式的字符串 records，请以字符串形式返回复原后的内容。
// 注： records 仅由小写字母、数字及<, >, (, )组成。

// 输入：records = "abc(d)<2>e"
// 输出："abcdde"
// 解释：字符串中出现 "(d)<2>"，表示 "d" 重复出现 2 次，因此返回复原后的内容 "abcdde"。


// 输入：records = "a(b(c)<3>d)<2>e"
// 输出："abcccdbcccde"
// 解释：字符串中出现 "a(b(c)<3>d)<2>"，其中 "(c)<3>" 表示 "c" 出现 3 次，复原为 "ccc"；"(bcccd)<2>" 表示 "bcccd" 重复出现 2 次，复原为 "bcccdbcccd"。最终返回复原后内容 "abcccdbcccde"

function UnzipString (records) {
  const re = /\(([^(]*?)\)<(\d*?)>/g
  console.log(records.match(re));

  // while (re.test(records)) {
  // records = records.replace(re, (search, p1, p2) => {
  //   return p1.repeat(parseInt(p2))
  // })
  // }
  return records;
}

UnzipString('a(b(c)<3>d)<2>e')
