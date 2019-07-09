import SortedBinaryTree, { Node } from "./SortedBinaryTree";

describe("Sorted binary tree", () => {
    test("Inorder traverse", () => {
        let items = [4, 2, 3, 1, 7, 8, 6];
        let inorder = [1, 2, 3, 4, 6, 7, 8];

        let tree = new SortedBinaryTree();
        for (let item of items) {
            let node = new Node(item);
            tree.add(node);
        }

        expect(tree.inorder()).toEqual(inorder);
    });
});
