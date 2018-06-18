'use strict';

const preOrderTraversal = (node, map, array, callback) => { // eslint-disable-line
  if (!node) return undefined;
  callback(map, node.value, array);

  preOrderTraversal(node.left, map, array, callback);
  preOrderTraversal(node.right, map, array, callback);
  return undefined;
};

const mapValues = (hashmap, value) => { // eslint-disable-line
  hashmap[value] = 1;
};
const pushValues = (hashmap, value, array) => { // eslint-disable-line
  if (hashmap[value]) {
    array.push(value);
  }
};


export default (tree1, tree2) => { // eslint-disable-line
  if (!tree1 || !tree2) {
    return null;
  }
  const map = new Map();
  const results = [];

  preOrderTraversal(tree1.root, map, null, mapValues);
  preOrderTraversal(tree2.root, map, results, pushValues);
  return results;
};
