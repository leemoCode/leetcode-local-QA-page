export interface DataInterface {
  page: Ref<string>;
  Page: {
    [key:string]: string;
  }

  goPage: (targetPage: string) => void;
}

export interface LeetCodeDataInterface {
  questionList: QuestionItemInterface[];
}

export interface QuestionItemInterface {
  id: number; // 题目序号
  url: string; // 题目链接
  title: string; // 题目标题
  description: string; // 描述
  io: string; // 示例输入输出
  solution: string; // 解法
  code: string[]; // 代码
}
