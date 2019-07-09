import { Node } from "./TreeUtils";
import BinaryTree from "./BinaryTree";

describe("Binary tree structure", () => {
    test("Can navigate from root to leafs", () => {
        
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
        expect(tree.root.left.left).toEqual(n2);
        expect(tree.root.left.right).toEqual(n5);
        expect(tree.root.right.left).toEqual(n8);
        expect(tree.root.right.right).toEqual(n10);
    });
});

describe("Binary tree pre order traversal", () => {
    test("Preorder traverse 1", () => {
        
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
        let preorder = [7, 4, 2, 5, 9, 8, 10];
        expect(tree.traversePreorder()).toEqual(preorder);
    });

    test("Preorder traverse 2", () => {
        
        // Assemble a tree like:
        //               7
        //             /   \
        //            4      9
        //           /        \
        //          2         10

        let n2 = new Node(2);
        let n10= new Node(10);
        let n4 = new Node(4);
        let n9 = new Node(9);
        let n7 = new Node(7);

        n4.left = n2;
        n9.right = n10;
        n7.left = n4;
        n7.right = n9;

        let tree = new BinaryTree(n7);
        let preorder = [7, 4, 2, 9, 10];
        expect(tree.traversePreorder()).toEqual(preorder);
    });

    test("Preorder traverse 3", () => {
        
        // Assemble a tree like:
        //               7
        //             /  
        //            4     
        //           /      
        //          2       

        let n2 = new Node(2);
        let n4 = new Node(4);
        let n7 = new Node(7);

        n4.left = n2;
        n7.left = n4;

        let tree = new BinaryTree(n7);
        let preorder = [7, 4, 2];
        expect(tree.traversePreorder()).toEqual(preorder);
    });

    test("Preorder traverse 4", () => {
        
        // Assemble a tree like:
        //               7
        //                 \
        //                   9
        //                    \
        //                    10

        let n10= new Node(10);
        let n9 = new Node(9);
        let n7 = new Node(7);

        n9.right = n10;
        n7.right = n9;

        let tree = new BinaryTree(n7);
        let preorder = [7, 9, 10];
        expect(tree.traversePreorder()).toEqual(preorder);
    });
})

describe("Binary tree in order traversal", () => {
    test("In order traverse 1", () => {
        
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
        let inorder = [2, 4, 5, 7, 8, 9, 10];
        expect(tree.traverseInorder()).toEqual(inorder);
    });

    test("In order traverse 2", () => {
        
        // Assemble a tree like:
        //               7
        //             /   \
        //            4      9
        //           /        \
        //          2         10

        let n2 = new Node(2);
        let n10= new Node(10);
        let n4 = new Node(4);
        let n9 = new Node(9);
        let n7 = new Node(7);

        n4.left = n2;
        n9.right = n10;
        n7.left = n4;
        n7.right = n9;

        let tree = new BinaryTree(n7);
        let inorder = [2, 4, 7, 9, 10];
        expect(tree.traverseInorder()).toEqual(inorder);
    });

    test("In order traverse 3", () => {
        
        // Assemble a tree like:
        //               7
        //             /  
        //            4     
        //           /      
        //          2       

        let n2 = new Node(2);
        let n4 = new Node(4);
        let n7 = new Node(7);

        n4.left = n2;
        n7.left = n4;

        let tree = new BinaryTree(n7);
        let inorder = [2, 4, 7];
        expect(tree.traverseInorder()).toEqual(inorder);
    });

    test("In order traverse 4", () => {
        
        // Assemble a tree like:
        //               7
        //                 \
        //                   9
        //                    \
        //                    10

        let n10= new Node(10);
        let n9 = new Node(9);
        let n7 = new Node(7);

        n9.right = n10;
        n7.right = n9;

        let tree = new BinaryTree(n7);
        let inorder = [7, 9, 10];
        expect(tree.traverseInorder()).toEqual(inorder);
    });
});

describe("Binary tree post order traversal", () => {
    test("Postorder traverse 1", () => {
        
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
        let result = [2, 5, 4, 8, 10, 9, 7];
        expect(tree.traversePostorder()).toEqual(result);
    });

    test("Postorder traverse 2", () => {
        
        // Assemble a tree like:
        //               7
        //             /   \
        //            4      9
        //           /        \
        //          2         10

        let n2 = new Node(2);
        let n10= new Node(10);
        let n4 = new Node(4);
        let n9 = new Node(9);
        let n7 = new Node(7);

        n4.left = n2;
        n9.right = n10;
        n7.left = n4;
        n7.right = n9;

        let tree = new BinaryTree(n7);
        let result = [2, 4, 10, 9, 7];
        expect(tree.traversePostorder()).toEqual(result);
    });

    test("Postorder traverse 3", () => {
        
        // Assemble a tree like:
        //               7
        //             /  
        //            4     
        //           /      
        //          2       

        let n2 = new Node(2);
        let n4 = new Node(4);
        let n7 = new Node(7);

        n4.left = n2;
        n7.left = n4;

        let tree = new BinaryTree(n7);
        let result = [2, 4, 7];
        expect(tree.traversePostorder()).toEqual(result);
    });

    test("Postorder traverse 4", () => {
        
        // Assemble a tree like:
        //               7
        //                 \
        //                   9
        //                    \
        //                    10

        let n10= new Node(10);
        let n9 = new Node(9);
        let n7 = new Node(7);

        n9.right = n10;
        n7.right = n9;

        let tree = new BinaryTree(n7);
        let result = [10, 9, 7];
        expect(tree.traversePostorder()).toEqual(result);
    });
});
