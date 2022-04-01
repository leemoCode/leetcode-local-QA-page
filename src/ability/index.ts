// import { ref } from 'vue';
import { AbilityInterface } from '../types/ability';

export function useAbility(): AbilityInterface {
  const sayHello = () => {
    console.log('hello world');
  }

  return {
    sayHello,
  }

}
