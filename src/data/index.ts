import { ref } from 'vue';
import { DataInterface } from '../types/data';

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
