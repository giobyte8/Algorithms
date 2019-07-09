
export default class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    traversePreorder() {
        return this.root === null
            ? []
            : this.root.traversePreorder();
    }

    traverseInorder() {
        return this.root === null
            ? []
            : this.root.traverseInorder();
    }

    traversePostorder() {
        return this.root === null
            ? []
            : this.root.traversePostorder();
    }
}
