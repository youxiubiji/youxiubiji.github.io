# Echarts 地图数据

-   例如

![](/gossip/002.png)



```js
<template>
    <div class="main" id="main"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    name: 'App',
    data() {
        return {
            henan: require('./utils/map.json'), //地图json数据
        }
    },
    mounted() {
        this.$nextTick(() => {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'))

            echarts.registerMap('henan', this.henan, {})

            myChart.setOption({
                series: [
                    {
                        name: '郑州市',
                        label: {
                            normal: {
                                show: true,
                            },

                            emphasis: {
                                show: true,
                            },
                        },

                        itemStyle: {
                            color: '#ddb926',
                        },

                        type: 'map',

                        zoom: 1, //缩放比例

                        roam: true,

                        mapType: 'henan',

                        emphasis: {
                            label: {
                                show: true,
                            },
                        },

                        textFixed: {
                            Alaska: [20, -20],
                        },
                    },
                ],

                tooltip: {
                    trigger: 'item',
                    showDelay: 0,
                    padding: 0,
                    transitionDuration: 0.2,
                    formatter: function () {
                        return '<div style="width:200px;height:100px;background:red;padding:0 0;margin:0 0;"></div>'
                    },
                },
                geo: {
                    map: 'henan',
                    itemStyle: {
                        normal: {
                            borderColor: '#4a75ff',
                            borderWidth: 5,
                            areaColor: 'rgba(65, 82, 245, 0)',
                            shadowColor: 'rgba(51, 69, 255, 1)',
                            shadowBlur: 20,
                        },
                        emphasis: {
                            areaColor: 'rgba(0, 0, 0, 0)',
                        },
                    },
                    hoverAnimation: false,
                    show: true,
                },
            })
        })
    },
}
</script>

<style>
.main {
    width: 1500px;
    height: 800px;
}
</style>

```

## 地图数据获取

[https://datav.aliyun.com/portal/school/atlas/area_selector#&lat=31.769817845138945&lng=104.29901249999999&zoom=4](https://datav.aliyun.com/portal/school/atlas/area_selector#&lat=31.769817845138945&lng=104.29901249999999&zoom=4)