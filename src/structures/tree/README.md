# Trees
A tree is a non linear data structure that uses nodes to store
data and is organized in a hierarchical way. Each node holds a
value and the references to its childs nodes.

The nodes can not have circular references, if such cases,
the structure becomes a graph instead of a tree.

## Binary tree
A binary tree is composed by nodes with at most two childs
per node (left and right).

A **binary search tree** or *sorted binary tree* is structured in
such way than for every node the values of the offspring of its
left child is less than the value of current node and the offspring
of its right child is greater.

## Traversal
There are three clasical ways to traverse a tree:

* **Pre order** Visits nodes in order: Parent, left, right
* **In order** Visits nodes in order: Left, parent, right
* **Post order** Visits nodes in order: Left, right, parent

## Balanced binary trees
A binary search tree must be balanced for preformance reasons.

Consider the next binary trees:
```text
    a                |          d
     \               |        /   \
      b              |       b     f
       \             |      / \   / \
        c            |     a   c e   g
         \           |
          d          |
           \         |
            e        |
                     |
    Unbalanced               Balanced
```
On the first case the time complexity is O(n) to look for an element
in the tree, this is not diferent of a linked list, on the other hand
in the second case the time complexity is O(log n). If we consider
a tree with 1, 000, 000, 000 of elements and the worst case where we're
looking for the last element, this takes 1, 000, 000, 000 of 
comparisions. In change with a balanced trees this is reduced 
dramatically.

## Implementations

### Node class
Checkout the `Node` class at [TreeUtils](./TreeUtils), this class
is used across all the tree implementations, and implements the 
traversal algorithms.

### Binary tree
Check the `BinaryTree` class at [BinaryTree](./BinaryTree) file, this
class is the implementations of a simple binary tree.

### Unit tests
The unit tests at [BinaryTree.spec.js](./BinaryTree.spec.js) verifies
the funcionality of basic binary tree and the traversal algorithms.

### Serialization/Deserialization
In order to solve a coding problem, serialization and deserialization
has been implemented, check [SerializedTree.js](./SerializedTree.js)
and [SerializedTree.spec.js](./SerializedTree.spec.js) for details.

## TODO

* Implement mechanisms to add/remove nodes from tree and keep it balanced
* Implement mechanism to look for an element inside tree
