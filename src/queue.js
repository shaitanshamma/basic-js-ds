const {NotImplementedError} = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

    data = [];

    getUnderlyingList() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.data[0]
    }

    enqueue(value) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let newNode = new ListNode(value);
        if(this.data.length===0){
            this.data.push(newNode)
        }else {
            let node = this.data.pop();
            node.next = newNode;
            this.data.push(node);
            this.data.push(newNode)
        }
    }

    dequeue() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let shiftedNode=this.data.shift();
        return shiftedNode.value
    }
}

module.exports = {
    Queue
};
