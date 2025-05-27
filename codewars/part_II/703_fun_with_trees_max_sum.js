function maxRootToLeafSum(node) {
  if (node === null) {
    return 0;
  }

  if (node.left === null && node.right === null) {
    return node.value;
  }

  const leftSum = maxRootToLeafSum(node.left);
  const rightSum = maxRootToLeafSum(node.right);

  return node.value + Math.max(leftSum, rightSum);
}

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const tree = new TreeNode(
  17,
  new TreeNode(3, new TreeNode(2)),
  new TreeNode(
    -10,
    new TreeNode(16),
    new TreeNode(1, new TreeNode(13))
  )
);

console.log(maxRootToLeafSum(tree)); //23
