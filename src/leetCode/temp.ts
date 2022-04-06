const questionO03 = (arr: number[]) => {
  // 建立哈希表
  const hash: { [key: number]: number } = {};

  for (const item of arr) {
    if (hash[item]) {
      return item;
    }

    hash[item] = 1;
  }
};

const res = questionO03([1, 2, 3, 2, 0, 0]);

console.log(res);
