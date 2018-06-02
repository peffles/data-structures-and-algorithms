'use strict';

class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  enqueue(animal) {
    this.queue.push(animal);
  }

  dequeue(pref) {
    if (pref) {
      for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i].type === pref) {
          return this.queue.splice(i, 1);
        }
      }
    }
    return this.queue.shift();
  }
}

export default AnimalShelter;