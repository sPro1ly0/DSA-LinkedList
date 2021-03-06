// Create a linked list class and its core functions from scratch
// insertFirst, insertLast, remove, find

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }

        let newNode = this.head; // ex. {value: item1, next: {value: item2, next: null}}
        while (newNode.next !== null) {
            newNode = newNode.next;
        }
        newNode.next = new _Node(item, null);
    }

    insertBefore(item, key) {
        if (this.head === null) {
            this.insertFirst(item);
        }

        let currentNode = this.head; // ex. {value: 'Apollo', next: {value: 'Boomer', next: null}}
        let previousNode = this.head; 

        while (currentNode !== null && currentNode.value !== key ) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (currentNode === null) {
            console.log('Key not found');
            return;
        }

        let newNode = new _Node(item, currentNode);

        previousNode.next = newNode;
    }

    insertAfter(item, key) {
        if (this.head === null) {
            this.insertFirst(item);
        }

        let currentNode = this.head;
        let previousNode = this.head; 

        while (currentNode !== null && currentNode.value !== key ) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (currentNode === null) {
            console.log('Key not found');
            return;
        }

        let newNode = new _Node(item, currentNode.next);

        previousNode.next.next = newNode;
    }

    insertAt(item, position) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        
        let currentPostion = 1;
        let currentNode = this.head;
        let previousNode = this.head; 

        while (currentPostion < position) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentPostion++;
        }

        if (currentNode === null) {
            console.log('Key not found');
            return;
        }

        let newNode = new _Node(item, currentNode);
        if (position === 1) {
            this.insertFirst(item);
        } else {
            previousNode.next = newNode;
        }
    }

    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currentNode = this.head;
        let previousNode = this.head;

        while ((currentNode.value !== item) && (currentNode !== null)) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode === null) {
            return console.log('Item not found');
        }

        previousNode.next = currentNode.next;
    }

    find(item) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode.value !== item) {
            if (currentNode.next === null) {
                return null;
            } else {
                currentNode = currentNode.next;
            }
        }
        
        return currentNode;
    }
}

function main() {
    const SLL = new LinkedList;

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    SLL.insertLast('Tauhida');

    SLL.remove('Husker');

    SLL.insertBefore('Athena', 'Helo');

    SLL.insertAfter('Hotdog', 'Helo');

    SLL.insertAt('Kat', 3);

    SLL.remove('Tauhida');
    console.log(SLL);
    return SLL;
}

// Supplemental functions for a linked list

const linkedList = main(); // use list created with main()

// display linked list
function display(list) {
    let link = list.head;
    let displayList = '';
    while(link !== null) {
        if (link.next !== null) {
            displayList += `${link.value} -> `;
            link = link.next;
        } else {
            return displayList += `${link.value} -> null`;
        }
    }
}
// console.log(display(linkedList));

// return size of linked list
function size(list) {
    let link = list.head;
    let size = 0;
    if (!link) {
        return null;
    }

    while (link !== null) {
        if (link.value) {
            size++;
            link = link.next;
        }
    }

    return size;
}
// console.log(size(linkedList)); // 7

// is list empty or not (no using size() function)
function isEmpty(list) {
    if (list.head === null) {
        return true;
    } else {
        return false;
    }
}
// console.log(isEmpty(linkedList)); // false

// find the node before the item you are looking for
function findPrevious(list, item) {
    let link = list.head;
    if (!link) {
        return null;
    }
    let currentNode = link;
    let previousNode = link;

    while (currentNode !== null && currentNode.value !== item) {
        previousNode = currentNode;
        currentNode = currentNode.next
    }

    if (currentNode === null) {
        return console.log('Item is not found.')
    } else {
        let node = previousNode.value;
        return node;
    }

}
// console.log(findPrevious(linkedList, 'Starbuck')) // Hotdog

// return the last node in linked list
function findLast(list) {
    let link = list.head;
    if (!link) {
        return null;
    }

    while (link.next !== null) {
        link = link.next;
    }

    return link.value;
}

// console.log(findLast(linkedList)); // Starbuck


function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
// This mystery program compares same values through the linked list.
// If the a node's value is equal the another node's value,
// then the pointer will skip this node and point to the node after it.
// It tests each node value against the other node values in the nested while loops.
// The time complexity polynomial O n^2;

// Reverse a list: Your program should reverse the direction of a given singly linked list.
// In other words, all pointers should point backward.
function reverseList(list) {
    let link = list.head;
    let reverseArrow = '';
    while (link !== null) {
        reverseArrow += `${link.value} <- `;
        link = link.next;
    }
    return reverseArrow;
}
 // console.log(reverseList(linkedList)); // Apollo <- Boomer <- Kat <- Athena <- Helo <- Hotdog <- Starbuck <-

// 3rd from the end
function thirdFromEnd(list) {
    let findEnd = list.head;
    let third = list.head;
    while (findEnd.next !== null) { // loops twice with linkedList above
        findEnd = findEnd.next.next.next;
        // console.log('end', findEnd); // 1st Athena, 2nd Starbuck
        third = third.next.next;
        // console.log('third', third); // 1st Kat, 2nd Helo <-- third from the end
    }
    return third.value;
}
// console.log(thirdFromEnd(linkedList)); // Helo

// Middle of the list
function middleOfList(list) {
    let findEnd = list.head;
    let middle = list.head;
    while (findEnd.next !== null) {
        findEnd = findEnd.next.next;
        middle = middle.next
    }
    return middle.value;
}
//console.log(middleOfList(linkedList)); // Athena

// Cycle in a list
let CycleList;
function addNextValues(list) {
    let node = list.head;
    while (node.next !== null) {
        node = node.next;
    }
    if (node.next === null) {
        node.next = list.head;
        return CycleList = node.next;
    }
}
// addNextValues(linkedList);

function cycleList(list) {
    let node = list;
    while(node.next !== null) {
        node = node.next;
        
        if (node.next == list) {
            return console.log('This is a linked list cycle');
        }
    }
    
}
// cycleList(CycleList); // 'This is a linked list cycle'

// Sorting a list
function sortList(list) {
    let currentNode = list.head;
    let storeValue;
    let sort = true;
    let result = '';

    while (sort) {

        sort = false;

        while (currentNode.next) {

            if (currentNode.value > currentNode.next.value) {

              storeValue = currentNode.value; // save value "Kat"
              currentNode.value = currentNode.next.value; // let value equal the next value "Athena"
              currentNode.next.value = storeValue; // set stored value equal to new value's next value; "Athena", next: {value: "Kat", ...}

              sort = true;
            }

            currentNode = currentNode.next;
          }

          if (!currentNode.next) {
            currentNode = list.head;
          }
    }
    // output sorted link list
    list = list.head;
    while (list !== null) {
        if (list.next === null) {
            result += `${list.value}`;
            list = list.next;
        } else {
            result += `${list.value} -> `;
            list = list.next;
        }
    }

    return result;
}
console.log(sortList(linkedList));