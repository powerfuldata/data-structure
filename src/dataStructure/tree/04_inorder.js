import {deserialize} from './01_deserialize'

/**
 * 二叉树中序遍历，迭代法
 */

const inorder = (root) => {
    const stack = [];
    const res = []
    while(stack.length > 0 || root) {
        while(root){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root ? root.val : null);
        root = root.right;
    }
    console.log('中序遍历=',res)
}

// 测试：
inorder(deserialize([11,9,13,7,10,12,14,5,8,null,null,null,null,null,null]))