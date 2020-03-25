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