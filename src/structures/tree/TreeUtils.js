
/**
 * Compares two elements through >= operator,
 * if first element is greater than or equal to second returns 1
 * else a '-1' value is returned
 * 
 * @param {Object} a First element
 * @param {Object} b Second element
 */
export const defComparator = (a, b) => a >= b ? 1 : -1;

/**
 * Default node class to use in trees
 */
export class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    /**
     * Traverses recursively this node and its childs using the
     * preorder traverse algorithm (Parent, left, right).
     * Each visited node is pushed to an array that is returned
     * as result.
     * @returns {Array} The visited nodes
     */
    traversePreorder() {
        let visited = [this.value];

        if (this.left !== null) {
            visited.push(...this.left.traversePreorder());
        }

        if (this.right !== null) {
            visited.push(...this.right.traversePreorder());
        }

        return visited;
    }

    /**
     * Traverses recursively this node and all its childs using the
     * inorder algorithm (Left, parent, right).
     * Each visited node is added to an array, the final array
     * is returned as result of the traverse.
     * @returns {Array} The visited nodes
     */
    traverseInorder() {
        if (this.left === null && this.right === null) {
            return [this.value];
        }

        if (this.left !== null) {
            if (this.right !== null) {
                return [
                    ...this.left.traverseInorder(),
                    this.value,
                    ...this.right.traverseInorder()
                ];
            }

            return [
                ...this.left.traverseInorder(),
                this.value
            ]
        }

        return [
            this.value,
            ...this.right.traverseInorder()
        ];
    }

    /**
     * Traverses recursively this node and all its childs using the
     * postorder algorithm (Left, right, parent).
     * Each visited node is added to an array, the final array
     * is returned as result of the traverse.
     * @returns {Array} The visited nodes
     */
    traversePostorder() {
        if (this.left === null) {
            if (this.right === null) {
                return [this.value];
            } else {
                return [
                    ...this.right.traversePostorder(),
                    this.value
                ];
            }
        } else {
            if (this.right === null) {
                return [
                    ...this.left.traversePostorder(),
                    this.value
                ];
            } else {
                return [
                    ...this.left.traversePostorder(),
                    ...this.right.traversePostorder(),
                    this.value,
                ];
            }
        }
    }
}
