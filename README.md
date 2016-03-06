# JavaScript linked-list example

A simple, immutable, singly-linked list - written using ES2015 features.

## Example usage

```javascript
const list0 = new EmptyList();        // => "()"
const list1 = list0.push(3);          // => "(3)"
const list2 = list1.push(2);          // => "(2 3)"
const list3 = list2.push(1);          // => "(1 2 3)"
const list13 = list1.append(list3);   // => "(3 1 2 3)"

list13.head()    // => 3
list13.tail()    // => list3

list1 instanceof ListNode
list1.tail() instanceof EmptyList
```
