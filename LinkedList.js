// private class
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // the head beginning of the list, always contains the 1st node
        this.head = null; // here we begin with an empty list
    }
    // O(1)
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    // O(n)
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        // start at head
        let currNode = this.head;
        // if empty list
        if (!this.head) {
            return null;
        }
        // check for the item
        while (currNode.value !== item) {
            if (currNode.next === null) {
                // item not found
                return null;
            } else {
                // keep looking
                currNode = currNode.next;
            }
        }

        return currNode;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }
        // if the node is at beginning, make the next node the head beginning
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // start at head
        let currNode = this.head;
        // keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // saving previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

}