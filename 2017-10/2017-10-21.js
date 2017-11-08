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
        preOrderTraverseNode(root, callback);
    }
    let preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key)
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }
    // 后序遍历
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    }
    let postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.right, callback);
            postOrderTraverseNode(node.left, callback);
            callback(node.key);
        }
    }
    this.min = function () {
        return minNode(root);
    }
    let minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        } else {
            return null
        }
    }
    this.max = function () {
        return maxNode(root);
    }
    let maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node;
        } else {
            return null;
        }
    }
    this.search = function (key) {
        return searchNode(root, key);
    }
    let searchNode = function (node, key) {
        if (node == null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key)
        } else if (key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true;
        }
    }
    this.remove = function (key) {
        removeNode(root,key);
    }

    let removeNode = function(node,key){
        if(node === null){
            return null
        }

        if(key < node.key){
            node.left = removeNode(node.left,key);
            return node;
        }else if(key > node.key){
            node.right = removeNode(node.right,key);
            return node;
        }else {
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }else if(node.left ===null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }else {
                let aux = minNode(node.right);
                node.key = aux.key;
                
                node.right = removeNode(node.right,aux.key);
                return node;
            }
        }

    }
    
    this.getRoot = function () {
        return root;
    }


}

let tree = new BinarySearchTree();
tree.insert(6);
tree.insert(3);
tree.insert(7);
tree.insert(5);
tree.insert(1);
tree.insert(4);
tree.insert(9);
console.log(JSON.stringify(tree.getRoot()))


// console.log(tree.getRoot());
let printNode = function (value) {
    console.log(value)
}

// tree.inOrderTraverse(printNode)
// tree.preOrderTraverse(printNode)
// tree.postOrderTraverse(printNode)

// console.log(tree.search(8))
// console.log(tree.search(1))
// console.log(tree.min())
// console.log(tree.max())

tree.remove(3)

console.log(JSON.stringify(tree.getRoot()))