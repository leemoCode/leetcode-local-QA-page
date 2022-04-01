export const question344 = (s: string[]) => {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  return s;
}

export const question387 = (s: string) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1
}

export const question387_1 = (s: string) => {
  const hash: {
    [key: string]: number;
  } = {};
  for (const item of s) {
    hash[item] = (hash[item] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

export const question14 = (strs: string[]) => {
  // 取第一个字符串做初始最长子串
  let curRes = strs[0];

  for (const item of strs) {
    // 遍历每个字符串

    let i = 0;
    for (; i < item.length; i++) {
      // 逐位比较 不等于就退出循环
      if (curRes[i] !== item[i]) {
        break;
      }
    }
    curRes = curRes.slice(0, i);
  }

  return curRes;
}

const solution = (s: string) => {

}

const res = solution('leetcode');

console.log(res);
