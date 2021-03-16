import {deserialize} from './01_deserialize'

/**
 * 98. 验证二叉搜索树
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
 * @params {*} root
 * @returns {Boolean}
 */
const isValidBST1 = (root) => {
    let valid = true
    const loop = (head, max, min) => {

    }
        
    loop(root, Infinity, -Infinity);

    return valid;
}

// 方法1：递归
const helper = (root, lower, upper) => {
    if (!root) {
        return true;
    }
    console.log(`root=${root.val}, lower=${lower}, upper=${upper}`)
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};

var isValidBST2 = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};

// 测试 yarn run ts-node src/dataStructure/tree/03_bst.js 
// console.log(isValidBST(deserialize([1,2,3,null,null,4,5])))
// console.log(isValidBST(deserialize([11,10,12,9,11,5,27,8,10,4,13,3,6,5,29])))
console.log(isValidBST(deserialize([11,9,13,7,10,12,14,5,8,null,null,null,null,null,null])))
