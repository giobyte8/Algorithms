import { rootAndLeafs } from "./RootAndLeafs";
import { Node } from "./TreeUtils";
import BinaryTree from "./BinaryTree";

describe("Tree leafs and root", () => {
    test("Get tree leafs", () => {
        
        // Assemble a tree like:
        //               7
        //             /   \
        //            4      9
        //           / \    / \
        //          2   5  8  10

        let n2 = new Node(2);
        let n5 = new Node(5);
        let n8 = new Node(8);
        let n10= new Node(10);
        let n4 = new Node(4);
        let n9 = new Node(9);
        let n7 = new Node(7);
        n4.left = n2;
        n4.right = n5;
        n9.left = n8;
        n9.right = n10;
        n7.left = n4;
        n7.right = n9;
        let tree = new BinaryTree(n7);

        let answer = [n7, n2, n5, n8, n10];
        expect(answer).toEqual(rootAndLeafs(tree.root, []));
    });
});
