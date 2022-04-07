const question349 = (arr1: number[], arr2: number[]) => {
  const hash: { [key: number]: number } = {};

  for (const item of arr1) {
    hash[item] = 1;
  }

  const res = new Set();

  for (const item of arr2) {
    // 出现交集
    if (hash[item]) {
      res.add(item);
    }
  }

  return [...res] as number[];
};

const res = question349([1, 2, 3, 2, 0, 0], [2, 3, 2]);

console.log(res);
