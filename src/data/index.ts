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
    io: '示例 1：\n 输入：s = ["h","e","l","l","o"] \n 输出：["o","l","l","e","h"] \n 示例 2：\n 输入：s = ["H","a","n","n","a","h"] \n  输出：["h","a","n","n","a","H"] \n',
    solution: '解构赋值翻转第i和第str.length - 1 - i个元素',
    code: [code.question344.toString()],
  })

  questionList.push({
    id: 387,
    url: 'https://leetcode-cn.com/problems/first-unique-character-in-a-string/solution/',
    title: '字符串中的第一个唯一字符',
    description: '给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。',
    io: 's = "leetcode"\n返回 0\n\ns = "loveleetcode"\n返回 2',
    solution: '方案1： indexOf === lastIndexOf \n 方案2： 两次循环 第一次循环建哈希表存字符 -> 出现次数的映射；第二次筛选第一个value为1的key',
    code: [code.question387.toString(), code.question387_1.toString()],
  })

  questionList.push({
    id: 14,
    url: 'https://leetcode-cn.com/problems/longest-common-prefix/',
    title: '最长公共前缀',
    description: '编写一个函数来查找字符串数组中的最长公共前缀。\n如果不存在公共前缀，返回空字符串 ""。',
    io: '输入： strs = ["flower","flow","flight"]\n输出： "fl"\n输入： strs = ["dog","racecar","car"]\n输出： ""\n解释： 输入不存在公共前缀。',
    solution: '解构赋值翻转第i和第str.length - 1 - i个元素',
    code: [code.question14.toString()],
  })


  return {
    questionList,
  }

}
