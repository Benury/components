# 功能组件基础版

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 一、右键菜单组件
##### 使用方法
```
    <h2 @contextmenu.prevent="showMenu=true;e = $event">EssentialLinks{{showMenu}}</h2>
    <sw-menu v-if="showMenu"  @on-hide-menu="showMenu = false" type="abs" :event="e">
       <ul>
        <li>菜单1</li>
        <li>菜单2</li>
        <li>菜单3</li>
        <li>菜单4</li>
      </ul>
    </sw-menu>
```
| 参数 | 说明 | 默认值| 可选值 |
| ---- | ---- |---- | ---- |
| v-if | 固定写法|
| @on-hide-menu| 固定写法 |
| type | 定位类型| fixed | 
| event | Event对象 | $event |


### 二、树形组件（改造后）
##### 结合右键菜单使用
```
      <vue-tree
      v-model="checkedIds"
      :tree-data="data"
      :options="options"
      @handle="test"
      @handle-menu="testMenu"
    />
    <sw-menu v-if="showMenuTree"  @on-hide-menu="showMenuTree = false" type="fixed" :event="e">
       <ul>
        <li>菜单1</li>
        <li>菜单2</li>
        <li>菜单3</li>
        <li>菜单4</li>
      </ul>
    </sw-menu>
    <sw-menu v-if="showMenuTreeFolder"  @on-hide-menu="showMenuTreeFolder = false" type="abs" :event="e">
       <ul>
        <li>菜单1</li>
        <li>菜单2</li>
        <li>菜单3</li>
        
      </ul>
    </sw-menu>
```
##### data 数据
```
showMenuTree:false,
      showMenuTreeFolder:false,
      e:'',
      checkedIds:[],
      options:{ "label": "label",
        "checkbox": false, 
        "contextmenu":true,
        "checkedOpen": true,
        "folderBold": false, 
        "idsWithParent": false,
        "depthOpen": 2,
        "openIcon": "iconfont icon-wenjianjia4",
        "closeIcon": "iconfont icon-folder", 
        "leafIcon":"iconfont icon-shujutubiao",
        "halfCheckedIcon": "fa fa-minus-square-o fa-fw text-primary", 
        "checkedIcon": "fa fa-check-square-o fa-fw text-danger", 
        "uncheckedIcon": "fa fa-square-o fa-fw" },

      "data": [{
        "id": "1",
        "label": "公有文件夹",
        "children": [
          {
            "id": "2",
            "label": "报告1"
          },
          {
            "id": "3",
            "label": "报告1"
          },
          {
            "id": "4",
            "label": "报告",
            "children": [
              {
                "id": "5",
                "label": "报告1",
                test:'123'
              }
            ]
          }
        ]
      }]
```

##### 方法
- @handle  返回数据 和 Event 、isFolder
- @handle-menu 返回数据和event 、isFolder
- 注意 currentId currentMenuId 需要依赖vuex
- 样式以及扩展的功能根据基线版本去定制化组件
- 其余可[查看文档](https://github.com/jiaxincui/vue-tree)

