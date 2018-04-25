'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

kthFromEnd (k) {
  let current = this.head;
  let length = 0;
  let kLength  = length -k;
  
  while (current) {
    if (current.next === null) break;
  
    current = current.next;
    length ++;
  }
  if (k > length) {return null;}

  for (let i = 0; i < klength; i++) {
    current = current.next;
  }
  return current;
}
