
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const isSameTree = (p, q) => {

  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
/*
const p1 = new TreeNode(1, 2, 3);
const q1 = new TreeNode(1, 2, 3);
console.log('r1: ', isSameTree(p1, q1));
console.log('p1', p1)
// true


const p2 = new TreeNode(1,2);
const q2 = new TreeNode(1,null,2);
console.log('r2: ', isSameTree(p2, q2));
// false


const p3 = new TreeNode(1,2,1);
const q3 = new TreeNode(1,1,2);
console.log('r3: ', isSameTree(p3, q3));
// false
*/