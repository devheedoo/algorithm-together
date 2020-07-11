/**
 * Runtime: 108 ms, faster than 95.42% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 41.7 MB, less than 54.84% of JavaScript online submissions for Add Two Numbers.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let sumOfL1AndL2 = head = new ListNode(0);
  let carry = 0;
  while (l1 !== null || l2 !== null || carry) {
    let subSum = 0;
    if (l1 !== null) {
      subSum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      subSum += l2.val;
      l2 = l2.next;
    }
    if (carry) subSum++;
    if (subSum >= 10) {
      carry = 1;
      subSum -= 10; 
    } else {
      carry = 0;
    }
    head.next = new ListNode(subSum);
    head = head.next;
  }
  return sumOfL1AndL2.next;
};