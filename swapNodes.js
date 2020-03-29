// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.



// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let second = head.next;
  let first = head;
  head = head.next;
  while (first.next) {
    first.next = second.next;
    second.next = first;
    temp = first.next;
    if (temp) {
      if (temp.next) {
        first.next = temp.next;
        first = temp;
        second = first.next;
      } else { first = temp }
    }
  }
  return head;
}


// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// let first = new ListNode(1);
// let second = new ListNode(2);
// first.next = second;
// let third = new ListNode(3);
// second.next = third;
// let fourth = new ListNode(4);
// third.next = fourth;


// let swap = swapPairs(first);
// console.log(swap.val, swap.next.val, swap.next.next.val, swap.next.next.next.val)
