// бінарне дерево пошуку
// структура даних, де кожний вузол є деревом (тобто, рекурсивна структура), але у кожного вузла може бути лише два потомки

// - Для кожного вузла, значення всіх вузлів в лівому піддереві менші за значення цього вузла.
// - Для кожного вузла, значення всіх вузлів в правому піддереві більші за значення цього вузла.

// O(log2n) - insert/remove
// O(log2n) - search

class BinaryTree {
  constructor() {
    this.root = null
  }

  add(value) {
    if (!this.root) {
      this.root = new TreeNode(value)
    } else {
      let node = this.root
      let newNode = new TreeNode(value)
      while (node) {
        if (value > node.value) {
          if (!node.end) {
            break
          }
          node = node.end
        } else {
          if (!node.start) {
            break
          }
          node = node.start
        }
      }
      if (value > node.value) {
        node.end = newNode
      } else {
        node.start = newNode
      }
    }
  }

  print(root = this.root) {
    if (!root) {
      return true;
    }
    console.log(root.value);
    this.print(root.start)
    this.print(root.end)
  }
}

class TreeNode {
  constructor(value) {
    this.value = value
    this.start = null
    this.end = null
  }
}

const tree = new BinaryTree()
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(2)
tree.add(1)
tree.print()

