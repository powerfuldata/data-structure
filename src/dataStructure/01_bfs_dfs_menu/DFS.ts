import list from './longJson.json'
const list1 = [
    { "id": 20, "parentId": 0 },
    { "id": 21, "parentId": 0 },
    { "id": 22, "parentId": 0 },
    { "id": 23, "parentId": 0 },
    { "id": 24, "parentId": 20 },
    { "id": 25, "parentId": 20 },
    { "id": 26, "parentId": 24 },
    { "id": 27, "parentId": 24 },
    { "id": 28, "parentId": 21 },
    { "id": 29, "parentId": 21 },
    { "id": 30, "parentId": 29 },
    { "id": 31, "parentId": 30 },
    { "id": 32, "parentId": 31 }
]

// 深度优先搜索
const dfs = (): any[] => {
    const res: any[] = [];// 结果
    let count = 0;
    const loop = (p: any,id = 0) => {
        let i = 0;
        while(i < list.length) {
            count ++;
            const item = list[i];
            if (item.parentId === id) {
                if (!p.children) p.children = [];
                p.children.push(item)
                loop(item, item.id);
                list.splice(i,1);// 移除
            } else {
                i ++;
            }
        }
    }
    // 遍历第一层,进行递归
    for(let i = 0; i < list.length; i ++){
        loop(list[i],list[i].id);
        list[i].parentId === 0 && res.push(list[i])
    }
    // console.log(JSON.stringify(res))
    console.log('dfs=',count)
    return res
}
// dfs()
export default dfs;