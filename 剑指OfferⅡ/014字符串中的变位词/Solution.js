/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let count = new Array(26).fill(0);
  for (let item of s1) {
    count[item.charCodeAt() - 'a'.charCodeAt()]++;
  }
  console.log('count1', count);

  const s1Len = s1.length;
  const s2Len = s2.length;
  let count2 = new Array(26).fill(0);
  let j = 0;
  for (let i = 0; i <= s2Len - s1Len; i++) {
    j = i;
    while (j - i < s1Len) {
      count2[s2[j].charCodeAt() - 'a'.charCodeAt()]++;
      j++;
    }
    if (j - i === s1Len && count.toString() === count2.toString()) {
      return true;
    }
    console.log('count2', count2);
    count2 = new Array(26).fill(0);
  }
  return false;
};

var checkInclusion = function (s1, s2) {
  const n = s1.length,
    m = s2.length;
  if (n > m) {
    return false;
  }
  const cnt1 = new Array(26).fill(0);
  const cnt2 = new Array(26).fill(0);
  for (let i = 0; i < n; ++i) {
    ++cnt1[s1[i].charCodeAt() - 'a'.charCodeAt()];
    ++cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()];
  }
  if (cnt1.toString() === cnt2.toString()) {
    return true;
  }
  for (let i = n; i < m; ++i) {
    ++cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()];
    --cnt2[s2[i - n].charCodeAt() - 'a'.charCodeAt()];
    if (cnt1.toString() === cnt2.toString()) {
      return true;
    }
  }
  return false;
};

var checkInclusion = function (s1, s2) {
  const n = s1.length,
    m = s2.length;
  if (n > m) {
    return false;
  }
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < n; ++i) {
    --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()];
    ++cnt[s2[i].charCodeAt() - 'a'.charCodeAt()];
  }
  let diff = 0;
  for (const c of cnt) {
    if (c !== 0) {
      ++diff;
    }
  }
  if (diff == 0) {
    return true;
  }
  for (let i = n; i < m; ++i) {
    const x = s2[i].charCodeAt() - 'a'.charCodeAt(),
      y = s2[i - n].charCodeAt() - 'a'.charCodeAt();
    if (x == y) {
      continue;
    }
    if (cnt[x] == 0) {
      ++diff;
    }
    ++cnt[x];
    if (cnt[x] == 0) {
      --diff;
    }
    if (cnt[y] == 0) {
      ++diff;
    }
    --cnt[y];
    if (cnt[y] == 0) {
      --diff;
    }
    if (diff == 0) {
      return true;
    }
  }
  return false;
};

var checkInclusion = function (s1, s2) {
  const n = s1.length,
    m = s2.length;
  if (n > m) {
    return false;
  }
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < n; ++i) {
    --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()];
  }
  let left = 0;
  for (let right = 0; right < m; ++right) {
    const x = s2[right].charCodeAt() - 'a'.charCodeAt();
    ++cnt[x];
    while (cnt[x] > 0) {
      --cnt[s2[left].charCodeAt() - 'a'.charCodeAt()];
      ++left;
    }
    if (right - left + 1 === n) {
      return true;
    }
  }
  return false;
};

const s1 = 'adc',
  s2 = 'dcda';
console.log(checkInclusion(s1, s2));
