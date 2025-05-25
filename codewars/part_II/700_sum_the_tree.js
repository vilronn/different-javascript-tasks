function sumTree(node) {
  if (node === null) {
    return 0;
  }
return node.value + sumTree(node.left) + sumTree(node.right);
}

const tree = {
  value: 1,
  left: { value: 0, left: null, right: null },
  right: {
    value: 0,
    left: null,
    right: { value: 2, left: null, right: null }
  }
};

console.log(sumTree(tree));//3
