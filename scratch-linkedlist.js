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
    return displayList;
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