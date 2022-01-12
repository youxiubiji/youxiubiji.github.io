# G2 可视化引擎

-   主要用来做一些图标等想相关的可视化界面

-   例如

![](/gossip/001.png)

### 后端给的数据不符合要求怎么办？

-   可以使用 DataSet

-   `npm install @antv/data-set --save`

-   map 数据加工

> 具体用法见示例：

```js
const data = [
    { x: 'a', y: 1 },
    { x: 'b', y: 11 },
    { x: 'c', y: 21 },
]

const dv = new DataView().source(data)
dv.transform({
    type: 'map',
    callback(row) {
        row.z = 'z' // 为每条记录新添加一个 z 字段
        return row
    },
})

console.log(dv.rows)
/*
[
  { x: 'a', y: 1, z: 'z' },
  { x: 'b', y: 11, z: 'z' },
  { x: 'c', y: 21, z: 'z' }
]
*/
```
