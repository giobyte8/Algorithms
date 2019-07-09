# Trees
A tree is a non linear data structure that uses nodes to store
data and is organized in a hierarchical way. Each node holds a
value and the references to its childs nodes.

The nodes can not have circulas references, is those are present,
the structure becomes a graph instead of a tree.

## Binary tree
A binary tree is composed for nodes with at most two childs
per node (left and right).

A **search binary tree** or *sorted binary tree* is structured in
such way than for every node the values of the offspring of its
left child is less than the value of current node and the offspring
of its right child is greater.

## Traversal
There are three clasical ways to traverse a tree:

* **Pre order** Visits nodes in order: Parent, left, right
* **In order** Visits nodes in order: Left, parent, right
* **Post order** Visits nodes in order: Left, right, parent

## Balanced binary trees
