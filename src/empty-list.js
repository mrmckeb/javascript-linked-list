import ListNode from './list-node';

/**
 * @typedef EmptyList
 * @type Object
 */

/** Class representing an emptyList. */
class EmptyList {

    /**
     * Appends an existing node list to the node list.
     * @param {ListNode} listNode - The listNode to append.
     * @return {ListNode} A new listNode with the listNode appended.
     */
    append (listNode) {
        return listNode;
    }

    /**
     * Checks if the node list is empty.
     * @return {boolean} True when empty.
     */
    isEmpty () {
        return true;
    }

    /**
     * Calculates and returns the length of the node list.
     * @return {number} The length of the node list.
     */
    length () {
        return 0;
    }

    /**
     * Creates and inserts a new listNode into the existing node list.
     * @param {number} value - The value of the new listNode.
     * @return {ListNode} A newly created listNode.
     */
    push (value) {
        return new ListNode(value, this);
    }

    /**
     * Removes a listNode by value from the list of nodes.
     * @param {number} value - The value of the listNode to remove.
     * @return {ListNode} A listNode, with the node removed.
     */
    remove () {
        return this;
    }

    /**
     * Returns a string representation of the list of nodes.
     * @return {string} The list of nodes wrapped in parenthesis.
     */
    toString () {
        return `()`;
    }

}

export default EmptyList;
