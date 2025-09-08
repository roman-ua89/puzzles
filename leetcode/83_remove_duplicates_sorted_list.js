/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const linkedList = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));

var deleteDuplicates = function(head) {
  let current = head;

  while(current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

const sortedLinkedList = deleteDuplicates(linkedList);
console.log('sortedLinkedList', sortedLinkedList)

const linkedListToString = (head) => {
  let currentNode = head;
  const nodes = [];
  while(currentNode) {
    nodes.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return nodes.join(', ');
}

console.log('arr -> str: ', linkedListToString(sortedLinkedList));