# Lab Exercise 03: Javascript Data Structures

You are asked to implement the following data structures using Javascript:
LinkedList, Stack, and Queue.

Specifications for each data structure are specified below.


## Specification

### `LinkedList`

Implement a singly linked list. The linked list class should be named
`LinkedList`.

Properties:

- `length`: the number of items in the linked list

Methods:

- `add(value)`
  - adds a new value to the linked list
  - returns nothing
- `remove(value)`
  - removes a value from the linked list
  - returns nothing
- `clear()`
  - removes all items from the linked list
  - returns nothing
- `contains(value)`
  - checks whether a value can be found in the linked list
  - returns boolean
- `items()`
  - retrieves all items in the linked list
  - returns an array of linked list items in the right order, with the last
    item added at the end of the array

### `Stack`

Implement a stack data structure. The stack class should be named `Stack`.

Properties:

- `length`: the number of items in the stack

Methods:

- `push(value)`
  - adds a new value to the stack
  - returns nothing
- `pop()`
  - removes the top of the stack
  - returns the removed value, or null
- `peek()`
  - retrieves the top of the stack
  - returns the top value, or null
- `items()`
  - retrieves all items in the stack
  - returns an array of stack items in the right order, with the top of the
    stack at the end of the array

### `Queue`

Implement a queue data structure. The queue class should be named `Queue`.

Properties:

- `length`: the number of items in the queue

Methods:

- `enqueue(value)`
  - adds a new value to the queue
  - returns nothing
- `dequeue()`
  - removes the front of the queue
  - returns the removed value, or null
- `peek()`
  - retrieves the front of the queue
  - returns the front value, or null
- `items()`
  - retrieves all items in the queue
  - returns an array of queue items in the right order, with the front of the
    queue at the start of the array


## File Structure

In this directory you will find the following files and directories:

- `datastructures`
  - `linkedlist.js`
  - `queue.js`
  - `stack.js`
- `lib`
- `index.html`
- `readme.md`
- `tests.js`

You are only allowed to modify the files inside the `datastructures` directory
to implement the required data structures.

Tests are also provided in the `tests.js` file, so that you can constantly
keep track of the completeness of your implementation. The tests provided will
be the complete test cases that will be used in checking your submissions.

To run the tests, open `index.html` in your browser. It should show how many
tests passed or failed.


## Additional Notes

- You may implement additional functions and classes as you need, but just
  place them inside the same file where they are needed.
- I will be using the latest Chrome stable version when checking your
  submissions, so you may use any new Javascript features that you want.
- Have fun! :)
