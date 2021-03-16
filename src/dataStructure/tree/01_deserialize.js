/**
 * 二叉树反序列化（按层次还原）
 * 剑指 Offer 37. 序列化二叉树
 * https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
 * @param {Array} nodes nodes是一个完美必定是一个完美二叉树
 * @return {*}
 */
export const deserialize = (nodes) => {
    if (!nodes || nodes.length <= 0 ) return null;
    const res = [];
    res.length = nodes.length;
    for(let i in nodes){// 填充各个节点
        if (nodes[i] !== null){
            res[i] = {val: nodes[i]}
        }
    }
    // 完美二叉树总结点树为 2 ^ (lv) - 1个，lv为层数， 最后一层个数为2 ^ (lv - 1)个
    // 因此遍历数组的一半即可
    for (let i = 0; i < Math.floor(nodes.length/ 2); i ++) {
        if (nodes[i] !== null) {
            if (nodes[i * 2 + 1] !== null) {
                res[i].left = res[i * 2 + 1]
            }
            if (nodes[i * 2 + 2] !== null) {
                res[i].right = res[i * 2 + 2]
            }
        }
    }
    console.log(res[0])
    return res[0]
}
/**
left = 2 * i + 1
right = 2 * i + 2


 */
