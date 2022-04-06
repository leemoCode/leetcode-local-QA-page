const question088 = (nums1: number[], m: number, nums2: number[], n: number) => {
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

const res = question088([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

console.log(res);
