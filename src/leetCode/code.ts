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

export const question088 = (nums1: number[], m: number, nums2: number[], n: number) => {
  // 取两个数组要拼接范围的末位index值
  m--;
  n--;

  // nums1的初始长度为m+n 所以初始赋值位为nums1的最后一个元素位
  let curIndex = nums1.length - 1;

  // 只要nums2没有遍历结束就继续循环
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[curIndex] = nums1[m];

      curIndex--;
      m--;
    } else {
      nums1[curIndex] = nums2[n];

      curIndex--;
      n--;
    }
  }
  // 无需return 最后结果放在nums1内即可
}
