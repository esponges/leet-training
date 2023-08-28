// javascript program to sort link list
// using insertion sort

var head = null;
var sorted = null;

class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// push at de beginning of the list
function push(val) {
  /* allocate node */
  var newnode = new node(val);
  /* link the old list of the new node */
  newnode.next = head;
  /* move the head to point to the new node */
  head = newnode;
}

// function to sort a singly linked list using insertion sort
function insertionSort(headref) {
  // Initialize sorted linked list
  var sorted = null;
  var current = headref;
  // Traverse the given linked list and insert every
  // node to sorted
  console.log('start insertion with current head ', current.val);
  while (current != null) {
    // Store next for next iteration
    var next = current.next;
    console.log('next in insertionSort while', next);
    // insert current in sorted linked list
    sortedInsert(current);
    // Update current
    current = next;
  }
  // Update head_ref to point to sorted linked list
  head = sorted;
}

/*
 * function to insert a new_node in a Note that this function expects a
 * pointer to head_ref as this can modify the head of the input linked list
 * (similar to push())
 */
function sortedInsert(newnode) {
  // special case where new node should be at start or sorted has not been defined
  if (sorted == null || sorted.val >= newnode.val) {
    console.log('sorted is null or special case', sorted && sorted.val, newnode.val);
    newnode.next = sorted;
    sorted = newnode;
  } else {
    console.log('sorted in else', sorted);
    var current = sorted;
    /* Locate the node before the point of insertion */
    while (current.next != null && current.next.val < newnode.val) {
      console.log('traversing inner while', current.next);
      current = current.next;
    }
    console.log('insertion sort found. Newnode: ', newnode);
    // append remaining list to the new node
    newnode.next = current.next;
    // from pointer actual position append new node + remaining
    current.next = newnode;
  }
}

/* Function to print linked list */
function printlist(head) {
  while (head != null) {
    console.log(head.val + ' ');
    head = head.next;
  }
}

// Driver program to test above functions

push(5);
push(20);
push(4);
push(3);
push(30);
console.log('Linked List before Sorting..<br/>');
// printlist(head);
insertionSort(head);
console.log('<br/>LinkedList After sorting<br/>');
// printlist(sorted);

// This code contributed by aashish1995
