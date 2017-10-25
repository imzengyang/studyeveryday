/**
 * 树
 * 
 * 二叉树  和 二叉搜索树
 * 
 * 
 */

function BinarySearchTree() {

    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    let root = null;

    this.insert = function (key) {

        let newnode = new Node(key);
        if (root == null) {
            root = newnode;
        } else {
            insertNode(root, newnode)
        }
    }

    let insertNode = function (node, newnode) {
        if (newnode.key < node.key) {
            if (node.left == null) {
                node.left = newnode
            } else {
                insertNode(node.left, newnode);
            }
        } else {
            if (node.right == null) {
                node.right = newnode;
            } else {
                insertNode(node.right, newnode);
            }
        }
    }

    this.search = function (key) { }
    // 中序遍历
    this.inOrderTraverse = function (callback) {
        inOrderTrevaseNode(root, callback);
    }
    let inOrderTrevaseNode = function (node, callback) {
        if (node !== null) {
            inOrderTrevaseNode(node.left, callback);
            callback(node.key);
            inOrderTrevaseNode(node.right, callback);
        }
    }
    // 先序遍历
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root,callback);
     }
     let preOrderTraverseNode = function(node,callback){
         if(node!==null){
             callback(node.key)
             preOrderTraverseNode(node.left,callback);
             preOrderTraverseNode(node.right,callback);
         }
     }
    // 后序遍历
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root,callback);
     }
     let postOrderTraverseNode = function(node,callback){
         if(node !== null){
             postOrderTraverseNode(node.right,callback);
             postOrderTraverseNode(node.left,callback);
             callback(node.key);
         }
     }
    this.min = function () { }
    this.max = function () { }
    this.remove = function (key) { }

    this.getRoot = function () {
        return root;
    }


}

let tree = new BinarySearchTree();
tree.insert(1);
tree.insert(3);
tree.insert(7);
tree.insert(5);

console.log(tree.getRoot());
let printNode = function(value){
    console.log(value)
}

// tree.inOrderTraverse(printNode)
// tree.preOrderTraverse(printNode)
tree.postOrderTraverse(printNode)