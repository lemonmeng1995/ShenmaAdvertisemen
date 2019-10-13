<template>
<div class="profileeditor">
profileeditor
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

<style scoped lang="scss">
.profileeditor{

}

</style>