
const defComparator = (a, b) => a >= b ? 1 : -1;

export class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    /**
     * Adds specified child to this node
     * @param {Node} node Child to add
     * @param {Function} comparator A function that compares two values and returns
     *                              1 if first element is greater than second or -1
     */
    add(node, comparator) {
        const comparationResult = comparator(node.value, this.value);

        // Value is less than this node?
        if (comparationResult === -1) {
            if (this.left !== null) {
                this.left.add(node, comparator);
            } else {
                this.left = node;
            }
        }

        // Value is greater than this node
        else {
            if (this.right !== null) {
                this.right.add(node, comparator);
            } else {
                this.right = node;
            }
        }
    }

    /**
     * Creates a list with all the offspring of this node
     * following the 'in order traversal algorithm'
     */
    inorder() {
        if (this.left === null && this.right === null) {
            return [this.value];
        }

        if (this.left !== null) {
            if (this.right !== null) {
                return [
                    ...this.left.inorder(),
                    this.value,
                    ...this.right.inorder()
                ];
            }

            return [
                ...this.left.inorder(),
                this.value
            ]
        }
    }
}

export default class SortedBinaryTree {
    constructor(comparator = defComparator) {
        this.comparator = comparator;
        this.root = null;
    }

    add(node) {
        if (this.root !== null) {
            this.root.add(node, this.comparator);
        } else {
            this.root = node;
        }
    }
    
    inorder() {
        return this.root === null
            ? []
            : this.root.inorder();
    }
}
