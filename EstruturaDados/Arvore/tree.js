class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  traverseInOrder(node, visit) {
    if (node !== null) {
      this.traverseInOrder(node.left, visit);
      visit(node.value);
      this.traverseInOrder(node.right, visit);
    }
  }
}

const tree = new BinaryTree();

function insertValue() {
  const valueInput = document.getElementById('value-input');
  const value = parseInt(valueInput.value);

  if (!isNaN(value) && !treeContainsValue(value)) {
    tree.insert(value);
    renderTree();
  }

  valueInput.value = '';
  valueInput.focus();
}

function removeValue() {
  const valueInput = document.getElementById('value-input');
  const value = parseInt(valueInput.value);

  if (!isNaN(value) && treeContainsValue(value)) {
    tree.remove(value);
    renderTree();
  }

  valueInput.value = '';
  valueInput.focus();
}

function treeContainsValue(value) {
  let contains = false;

  tree.traverseInOrder(tree.root, nodeValue => {
    if (nodeValue === value) {
      contains = true;
    }
  });

  return contains;
}

function renderTree() {
  const treeContainer = document.getElementById('tree-container');
  treeContainer.innerHTML = '';

  tree.traverseInOrder(tree.root, value => {
    const level = getLevel(value);
    const node = document.createElement('div');
    node.className = 'tree-node';
    node.textContent = value;
    node.style.marginTop = (level * 60) + 'px';
    treeContainer.appendChild(node);
  });
}

function getLevel(value, node = tree.root, level = 0) {
  if (node === null) return -1;
  if (value === node.value) return level;
  if (value < node.value) return getLevel(value, node.left, level + 1);
  if (value > node.value) return getLevel(value, node.right, level + 1);
}