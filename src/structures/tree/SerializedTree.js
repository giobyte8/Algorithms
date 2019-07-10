import { Node } from "./TreeUtils";
import BinaryTree from "./BinaryTree";

export default class SerializedTree extends BinaryTree {
    constructor(root = null) {
        super(root);
    }

    /**
     * Serializes the specified node to a recursive json like
     * {
     *   v: <value>,
     *   l: {<left offspring>}
     *   r: {<right offspring>}
     * }
     * 
     * @param {Node} node The node to serialize, root is used
     * by default
     */
    serialize(node = this.root) {
        if (node === null) return null;

        return {
            v: node.value,
            l: node.left === null
                ? null
                : this.serialize(node.left),
            r: node.right === null
                ? null
                : this.serialize(node.right)
        };
    }

    /**
     * Takes the a serialized inorder representation
     * and assembles the original tree
     * @param {string} serialized Serialized tree
     */
    deserializeFromInorder(serialized) {

    }
}
