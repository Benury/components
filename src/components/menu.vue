/*全局唯一的右键菜单*/
<template>
    <div class="menu-content" :style="style" @mouseleave="$emit('on-hide-menu')">
      <slot></slot>
    </div>
</template>

<script>
    export default{
        props:{
           type:{
               type:String,
               default:'fixed'
           },
           event:{
               
           }
        },
        computed:{
            style:function(){
                if(JSON.stringify(this.event) == '{}') return 
                if(this.type=='fixed'){
                    return `left:${this.event.pageX}px;top:${this.event.pageY}px;`
                } else {
                    return `left:${this.event.target.getBoundingClientRect().left}px;top:${this.event.target.getBoundingClientRect().top}px;`
                }
            }
        },
        data(){
            return {
               
            }
        }
    }
</script>

<style>
.menu-content{
    position: fixed;
    z-index: 999;
    border:1px solid #ccc;
    background: #fff;
    
}
.menu-content ul{
    margin:0;
    padding: 0;
}
.menu-content li{
    height:32px;
    line-height: 32px;
    padding: 0 20px;
}
.menu-content li:hover{
    background: #ccc;
    color:red;
}
</style>
