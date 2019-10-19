<template>
<div class="profileeditor">

 <vue-html5-editor :content="text" :height="400" placeholder="选填，可上传图片" 
 @change="updateData"></vue-html5-editor>
</div>
  

</template>

<script>
export default {
    name:"profileeditor",
    data(){
        return{
             text: '', 

        }
    },
    methods:{
        updateData(){

        }
    }

}
</script>

<style  lang="scss" scoped>
.profileeditor{
    margin:30px;
      .vue-html5-editor{
         padding:20px;
          background-color: rgba(226, 214, 214, 0.568) ;
  
    }
       /deep/ .vue-html5-editor>.toolbar {
        background-color: rgb(241, 233, 233) ;
    }
     /deep/ .vue-html5-editor>.content {
        background-color:#fff;
        // margin:20px;
    }

     /deep/ .toolbar {     
            ul{          
        
                &>li:nth-child(8) {
                    display: none;
                }
                &>li:nth-child(13) {
                    display: none;
                }
            }
        }



}

</style>