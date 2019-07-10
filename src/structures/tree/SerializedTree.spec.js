import { Node } from "./TreeUtils";
import SerializedTree from "./SerializedTree";

describe("Serialize binary tree", () => {
    test("Serialize tree 1", () => {

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

        let tree = new SerializedTree(n7);
        let serialized = tree.serialize();
        let jTree = JSON.parse(serialized);
        
        expect(jTree.v).toEqual(7);
        expect(jTree.l.v).toEqual(4);
        expect(jTree.l.l.v).toEqual(2);
        expect(jTree.l.r.v).toEqual(5);
        expect(jTree.r.v).toEqual(9);
        expect(jTree.r.l.v).toEqual(8);
        expect(jTree.r.r.v).toEqual(10);
    });

    test("Serialize tree 2", () => {
        
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

        let tree = new SerializedTree(n7);
        let serialized = tree.serialize();
        let jTree = JSON.parse(serialized);

        expect(jTree.v).toEqual(7);
        expect(jTree.l).toEqual(null);
        expect(jTree.r.v).toEqual(9);
        expect(jTree.r.l).toEqual(null);
        expect(jTree.r.r.v).toEqual(10);
    });
});

describe("Deserialize binary tree", () => {
    test("Deserialize tree 1", () => {

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

        let tree = new SerializedTree(n7);
        let serialized = JSON.stringify(tree.serialize());
        let inorder = [2, 4, 5, 7, 8, 9, 10];

        let restoredTree = SerializedTree.deserialize(serialized);
        expect(restoredTree.traverseInorder()).toEqual(inorder);
    });

    test("Deserialize tree 2", () => {

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

        let tree = new SerializedTree(n7);
        let serialized = JSON.stringify(tree.serialize());
        let inorder = [7, 9, 10];

        let restoredTree = SerializedTree.deserialize(serialized);
        expect(restoredTree.traverseInorder()).toEqual(inorder);    
    });
});
