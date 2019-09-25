
/**
 * Retrieves all the leafs of a tree and
 * its root
 * 
 * @param {Object} node The node to evaluate
 * @param {Object} node.left
 * @param {Object} node.right
 * @param {Array} leafs Array with whole leafs
 */
export const rootAndLeafs = (node, leafs) => {
    if (leafs.length === 0 ||
        (node.left === null && node.right === null)) {
        leafs.push(node);
    }

    if (node.left !== null) {
        rootAndLeafs(node.left, leafs);
    }

    if (node.right !== null) {
        rootAndLeafs(node.right, leafs);
    }

    return leafs;
}