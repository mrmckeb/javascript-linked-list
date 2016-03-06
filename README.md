# JavaScript linked list example

A simple, immutable, singly-linked list. Written using ES2015 features.

## Testing

[Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) are used for testing, and the tests (like the linked list) are written in ES2015. The code is transpiled via [babel-register](https://babeljs.io/docs/usage/require/), so no build tools are required.

First, run `npm install`. Then, run the test suite with `npm test`. Note: Mocha doesn't need to be installed globally.

## Example usage

```javascript
const list0 = new EmptyList();              // "()"
const list1 = list0.push(3);                // "(3)"
const list2 = list1.push(2);                // "(2 3)"
const list3 = list2.push(1);                // "(1 2 3)"

const appendedList = list1.append(list3);   // "(3 1 2 3)"
appendedList.head()                         // 3
appendedList.tail()                         // list3

list1 instanceof ListNode                   // true
list1.tail() instanceof EmptyList           // true
```
