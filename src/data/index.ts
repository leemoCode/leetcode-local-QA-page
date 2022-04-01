import { ref } from 'vue';
import { DataInterface, LeetCodeDataInterface, QuestionItemInterface } from '../types/data';

import { code } from '../leetCode/index';

export function useData(): DataInterface {
  const Page = {
    HOME: 'Home',
    LEET_CODE: 'LeetCode',
  }

  const page = ref(Page.HOME);

  const goPage = (targetPage: string) => {
    page.value = targetPage;
  }

  return {
    Page,
    page,

    goPage,
  }

}

export function useLeetCodeData(): LeetCodeDataInterface {
  const questionList: QuestionItemInterface[] = [];

  questionList.push({
    id: 344,
    url: 'https://leetcode-cn.com/problems/reverse-string/',
    title: '翻转字符串',
    description: '编写一个函数，其作用是将输入的字符串反转过来。必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。',
    solution: '解构赋值翻转第i和第str.length - 1 - i个元素',
    code: code.question344.toString(),
  })

  return {
    questionList,
  }

}
