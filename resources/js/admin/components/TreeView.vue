<template>
  <div>  
   <label>Name</label>
   <input type="text" class="form-control m-input" v-model="parentName" placeholder="Enter your name">
    <button class="btn btn-primary btn-sm btn-clean btn-icon btn-icon-md" @click.prevent="addNode">إضافة تصنيف رئيسي </button>
    <button class="btn btn-primary btn-sm btn-clean btn-icon btn-icon-md" @click.prevent="addNodeChild">إضافة تصنيف فرعي</button>
    <vue-tree-list
      @click="onClick"
      @change-name="onChangeName"
      @delete-node="onDel"
      @add-node="onAddNode"
      :model="data"
      default-tree-node-name="new node"
      default-leaf-node-name="new One"
      v-bind:default-expanded="false">
      <span class="icon" slot="addTreeNodeIcon">📂</span>
      <span class="icon" slot="addLeafNodeIcon">＋</span>
      <span class="icon" slot="editNodeIcon">📃</span>
      <span class="icon" slot="delNodeIcon">✂️</span>
      <span class="icon">🍃</span>
      <span class="icon" >🌲</span>
    </vue-tree-list>
  </div>
</template>


<script>
  import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
  export default {
    components: {
      VueTreeList
    },
    data () {
      return {
        newTree: {},
        parentName:'name',
        data: new Tree([
          {
            name: 'الملابس ',
            id: 1,
            pid: 0,
            dragDisabled: true,
            addTreeNodeDisabled: true,
            addLeafNodeDisabled: true,
            editNodeDisabled: true,
            delNodeDisabled: true,
            children: [
              {
                name: 'ملابس أطفال',
                id: 2,
                isLeaf: true,
                pid: 1,
                children: [
                  {
                   name: 'ملابس مواليد',
                   id: 2,
                   isLeaf: true,
                   pid: 1,
                  }
                ]
              },
              {
                name: 'ملابس نساء',
                id: 2,
                isLeaf: true,
                pid: 1,
                children: [
                 {}
                ]
              }
            ]
          }

        ])
      }
    },
    methods: {
      onDel (node) {
        console.log(node)
        node.remove()
      },
 
      onChangeName (params) {
        console.log(params)
      },
 
      onAddNode (params) {
        //console.log(params)
      },
 
      onClick (params) {
        console.log(params)
      },
 
      addNode () {
        var node = new TreeNode({ name: this.parentName, isLeaf: false })
        if (!this.data.children) this.data.children = []
        this.data.addChildren(node)
      },
      addNodeChild(){
        let child = this.data.children
        for (var i=0; i=>child.length; i++){
          let childNode = child[i].children
          console.log(childNode,'jjjjjs')
          childNode.push({'name' :this.parentName})
        }
      }
      
    }
  }
</script> 

 

<style>
  .vtl {
    .vtl-drag-disabled {
      background-color: #d0cfcf;
      &:hover {
        background-color: #d0cfcf;
      }
    }
    .vtl-disabled {
      background-color: #d0cfcf;
    }
  }
   .icon {
    &:hover {
      cursor: pointer;
    }
  }
  input[type=text] {
  width:30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
label{
      font-size: 20px;

}
button {
  border-color: blue;
}

</style> 