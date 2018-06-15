'use strict';

const checkMax = (rootNode) => {
  let maxValue = rootNode.value;

  const findMaxVal = (node) => {
    if (!node) {
      return undefined;
    }
    if (node.value > maxValue) {
      maxValue = node.value;
    }

    findMaxVal(node.left);
    findMaxVal(node.right);
    return undefined;
  };

  findMaxVal(rootNode);
  return maxValue;
};

export default checkMax;
