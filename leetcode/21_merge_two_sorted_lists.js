/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

var mergeTwoLists = function(list1, list2) {
  let dummyHead = new ListNode(0);
  // 'current' pointer will be used to build the merged list
  let current = dummyHead;

  // Iterate while both lists have nodes
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1; // Append node from list1
      list1 = list1.next; // Move list1 pointer forward
    } else {
      current.next = list2; // Append node from list2
      list2 = list2.next; // Move list2 pointer forward
    }
    current = current.next; // Move current pointer forward in the merged list
  }

  // After one list is exhausted, append the remaining part of the other list
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  // The actual head of the merged list is after the dummy node
  return dummyHead.next;

};

const res = mergeTwoLists(list1, list2);
console.log('res', res);

const nodeListToString = (head) => {
  const nodes = [];
  let currentNode = head;
  while (currentNode) {
    nodes.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return nodes.join(', ');
}

console.log('to str: ', nodeListToString(res))