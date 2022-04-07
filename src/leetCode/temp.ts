interface ListNode {
  val: number;
  next: ListNode | null;
}

const question206_1 = (head: ListNode | null) => {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead: (ListNode | null) = question206_1(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};

const res = question206_1();

console.log(res);
