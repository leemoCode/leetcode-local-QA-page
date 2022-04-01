export interface DataInterface {
  page: Ref<string>;
  Page: {
    [key:string]: string;
  }

  goPage: (targetPage: string) => void;
}
