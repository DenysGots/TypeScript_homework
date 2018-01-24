/* TASK 2 */
// LinkedList Class with methods:
// * get(i) - returns node with index "i"
// * put(i, el) - puts new node on position "i"
// * deleteNode(i) - deletes and returns node with index "i"
// * indexOf(el)  - returns index "i" of node.data = "el"
// so that get(indexOf(el) - indexOf(first element)) = el, even if first index is not 0 (ex. 1)
// * size() - returns size of the LinkedList
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    get(i) {
        let searchedNode = this.head;
        let length = this.length;
        if (length === 0 || i < 0 || i > length) {
            console.log(`Non-existing list node`);
            return;
        }
        for (let j = 0; j < i; j += 1) {
            searchedNode = searchedNode.next;
        }
        return searchedNode;
    }
    put(i, el) {
        let currentNode = this.head;
        let length = this.length;
        let node = null;
        let nextNodes = null;
        let previousNode = null;
        class Node {
            constructor(data) {
                this.data = data;
                this.next = null;
            }
            ;
        }
        ;
        node = new Node(el);
        if (!currentNode) {
            this.head = node;
            this.length += 1;
            return node;
        }
        ;
        if (i < 0 || isNaN(i)) {
            console.log(`Invalid new list node index`);
            return;
        }
        ;
        if (i !== undefined && i === 0) {
            nextNodes = this.head;
            this.head = node;
            this.head.next = nextNodes;
            this.length += 1;
            return node;
        }
        ;
        if (i === undefined || i >= length) {
            for (; currentNode.next;) {
                currentNode = currentNode.next;
            }
            ;
            currentNode.next = node;
            this.length += 1;
            return node;
        }
        ;
        if (i !== undefined && i > 0) {
            currentNode = node;
            previousNode = this.get(i - 1);
            nextNodes = (previousNode !== null) ? previousNode.next : null;
            previousNode.next = currentNode;
            currentNode.next = nextNodes;
            this.length += 1;
            return node;
        }
        ;
    }
    deleteNode(i) {
        let currentNode = this.head;
        let length = this.length;
        let previousNode = null;
        let subtractedNode = null;
        let deletedNode = null;
        if (i < 0 || i > length) {
            console.log(`Non-existing list node`);
            return;
        }
        ;
        if (i === 0) {
            this.head = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            this.length -= 1;
            return deletedNode;
        }
        ;
        for (let j = 0; j < i; j += 1) {
            previousNode = currentNode;
            subtractedNode = currentNode.next;
        }
        ;
        previousNode.next = subtractedNode.next;
        deletedNode = subtractedNode;
        subtractedNode = null;
        this.length -= 1;
        return deletedNode;
    }
    indexOf(el) {
        let currentNode = this.head;
        let searchedNodeIndex = 0;
        if (currentNode.data === el) {
            return searchedNodeIndex;
        }
        ;
        for (; currentNode.data !== el && currentNode.next;) {
            currentNode = currentNode.next;
            searchedNodeIndex += 1;
            if (!currentNode.next) {
                console.log(`Non-existing list node`);
                return;
            }
            ;
        }
        ;
        return searchedNodeIndex;
    }
    size() {
        return this.length;
    }
}
;
let a = new LinkedList();
a.put(0, "1");
a.put(1, "2");
a.put(2, "3");
a.put(0, "0");
a.put(10, "4");
console.log(a.size());
console.log(a.indexOf("1"));
console.log(a.get(2));
console.log(a.deleteNode(1));
console.log(a);
