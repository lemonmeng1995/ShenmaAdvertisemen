<template>
<div id="briefintroduction">
    <p>briefintroduction</p>
    <Profileeditor/>

</div>
  
</template>

<script>
import Profileeditor from "./profileeditor"
export default {
    name:'briefintroduction',
    components:{Profileeditor},
    data(){
        return{

        }
    },
    create(){
        console.log("进来简介了。。。。")

    }

}
</script>

<style lang="scss" scoped>
#briefintroduction{
    
}

</style>