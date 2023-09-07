class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.elements = [];
    this.rear = -1;
    this.front = 0;
  }

  isFull() {
    if (this.rear === this.maxSize - 1) return true;
    return false;
  }

  isEmpty() {
    if (this.front > this.rear) return true;
    return false;
  }

  enqueue(data) {
    if (this.isFull()) console.log('Queue is full');
    else {
      this.rear += 1;
      this.elements[this.rear] = data;
    }
  }

  dequeue() {
    if (this.isEmpty()) console.log('Queue is empty');
    else {
      const data = this.elements[this.front];
      this.front += 1;
      return data;
    }
  }

  display () {
    const els = [];
    for (let i = this.front; i <= this.rear; i++) {
      els.push(this.elements[i]);
    }
    return els;
  }
}

const q = new Queue(5);
//Enqueue all the required element(s).
q.enqueue("Tom")
console.log("Queue after en-queuing one person")
//You may also use q.display() to display the elements in the queue
console.log(q)

q.enqueue("Dick")
q.enqueue("Harry")
q.enqueue("Jack")
q.enqueue("Maria")
console.log("\nQueue after en-queuing 4 more people")
console.log(q)

q.dequeue()
console.log("\nQueue after de-queuing once")
console.log(q.display())

// add extra
q.enqueue('Foowie')
console.log("\nQueue after en-queuing 4 more people")
console.log(q.display())
