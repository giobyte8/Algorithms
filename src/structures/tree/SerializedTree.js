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
        let jRoot = this._toJson(node);
        return JSON.stringify(jRoot);
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
    _toJson(node = this.root) {
        if (node === null) return null;

        return {
            v: node.value,
            l: this._toJson(node.left),
            r: this._toJson(node.right)
        };
    }

    /**
     * Takes the a serialized tree and deserialize it to
     * the original tree
     * @param {string} serialized Serialized tree
     */
    static deserialize(serialized) {
        let jRoot = JSON.parse(serialized);
        let root = SerializedTree._assemble(jRoot);

        return new SerializedTree(root);
    }

    /**
     * Takes a node in JSON notation and convert it into
     * a Node instance, also, its offspring will be converted
     * into nodes through recursion
     * 
     * @param {Object} jNode JSON serialized node
     * @param {Object} jNode.v Node value
     * @param {Object} jNode.l Left child
     * @param {Object} jNode.r Rightchild
     * @returns {Node} The node instance with its offspring
     */
    static _assemble(jNode) {
        let node = new Node(jNode["v"]);

        if (jNode["l"] !== null) {
            node.left = SerializedTree._assemble(jNode["l"]);
        }
        
        if (jNode["r"] !== null) {
            node.right = SerializedTree._assemble(jNode["r"]);
        }

        return node;
    }
}
