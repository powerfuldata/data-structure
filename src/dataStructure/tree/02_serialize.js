import { deserialize } from './01_deserialize'

/**
 * 剑指 Offer 37. 序列化二叉树
 * https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
 * @param {*}root
 * @returns {string}
 */
const serialize = (root) => {
    const queue = [root];
    const res = [];
    while(queue.length > 0) {
        let levelSize = queue.length;// 当前层数量
        for (let i = 0; i < levelSize; i ++) {
            const node = queue.pop();
            res.push(node ? node.val : null)
            if (node) queue.unshift(node.left)
            if (node) queue.unshift(node.right)
        }
    }
    console.log('res= ',res)
    return res
}
serialize(deserialize(JSON.parse('[1,2,3,null,null,4,5]')))