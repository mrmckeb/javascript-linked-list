/**
 * @typedef ListNode
 * @type Object
 * @property {value} value - The value of this listNode.
 * @property {ListNode} next - The next listNode.
 */

// Stores properties for each ListNode instance, with the ListNode as the key.
const properties = new WeakMap();

/** Class representing a listNode. */
class ListNode {

    /**
     * Create a listNode.
     * @param {number} value - The value to assign to the node.
     * @param {ListNode} next - A new listNode.
     */
    constructor (value, next) {
        properties.set(this, { value, next });
    }

    /**
     * Appends an existing node list to the node list.
     * @param {ListNode} listNode - The listNode to append.
     * @return {ListNode} A new listNode with the listNode appended.
     */
    append (listNode) {
        const { value, next } = properties.get(this);
        return new ListNode(value, next.append(listNode));
    }

    /**
     * Returns the value of the head of the node list.
     * @return {number} The value of the head of the node list.
     */
    head () {
        return properties.get(this).value;
    }

    /**
     * Checks if the node list is empty.
     * @return {boolean} True when empty.
     */
    isEmpty () {
        return false;
    }

    /**
     * Calculates and returns the length of the node list.
     * @return {number} The length of the node list.
     */
    length () {
        return properties.get(this).next.length() + 1;
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
     * Removes all matching listNodes from the list of nodes.
     * @param {number} value - The value of the listNode to remove.
     * @return {ListNode} A listNode, with the node removed.
     */
    remove (value) {
        const { value: nodeValue, next } = properties.get(this);

        /*
         * Each node's remove method returns a new listNode with the node's
         * current value and next property (each next node returns itself) -
         * unless that node is the one to be removed.
         *
         * In the case that a next node is a positive match, that node doesn't
         * return itself, and instead returns its next node, where the pattern
         * returns to normal.
         */
        const node = next.remove(value);

        // If this node is the one remove, return the next node.
        if (value === nodeValue) {
            return node;
        }

        /*
         * Nodes return themselves if they aren't a match and if their next
         * node isn't a match.
         *
         * Otherwise, they return a new node which has the next non-matching
         * node as their next. Returning a new node ensures that existing lists
         * aren't altered.
         */
        if (node === next) {
            return this;
        } else {
            return new ListNode(nodeValue, node);
        }
    }

    /**
     * Returns the tail listNode.
     * @return {ListNode} The tail listNode.
     */
    tail () {
        return properties.get(this).next;
    }

    /**
     * Returns a string representation of the list of nodes.
     * @return {string} The list of nodes wrapped in parenthesis.
     */
    toString () {
        const { value, next } = properties.get(this);

        return (function getNextValue (items, next) {
            if (!next.isEmpty()) {
                items.push(next.head());
                return getNextValue(items, next.tail());
            } else {
                return `(${items.join(' ')})`;
            }
        })([value], next);
    }

}

export default ListNode;
