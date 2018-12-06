<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @contextmenu.prevent="showMenu=true;e = $event">Essential Links{{showMenu}}</h2>
    <sw-menu v-if="showMenu"  @on-hide-menu="showMenu = false" type="abs" :event="e">
       <ul>
        <li>菜单1</li>
        <li>菜单2</li>
        <li>菜单3</li>
        <li>菜单4</li>
      </ul>
    </sw-menu>

    <div class="tree-container"> 
      <sw-tree
      v-model="checkedIds"
      :tree-data="data"
      :options="options"
      @handle="test"
      @handle-menu="testMenu"
      @handle-icon="testIcon"
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
    </div>
  </div>
</template>
                                            
<script>

export default {
  name: 'HelloWorld',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showMenu:false,
      showMenuTree:false,
      showMenuTreeFolder:false,
      e:'',
      checkedIds:[],
      options:{ "label": "label",
        "checkbox": false, 
        "contextmenu":true,
        "isDropDownMenu":true,
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
    }
  },
  methods:{
    menu(e){
      debugger
      this.showMenu=true;
      this.e = e;
    },
    test(obj){
      console.log(obj)
    },
    testMenu(obj){
      if(obj.isFolder){
        this.showMenuTreeFolder = true
      } else {
        this.showMenuTree= true;
      }
      
      console.log(obj)
      this.e = obj.e
    },
    testIcon(obj){

      debugger
      if(obj.isFolder){
        this.showMenuTreeFolder = true
      } else {
        this.showMenuTree= true;
      }
      
      console.log(obj)
      this.e = obj.e
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tree-container{
  width: 250px;
}
.menu-content{
  position: fixed;
}
h1, h2 {
  font-weight: normal;
  margin-left:240px;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
