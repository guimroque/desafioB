<template>
  <div>
    <navigation-Home/>
    <add-Form/>
    <footernav/>
  </div>
</template>

<script>
import navigationHome from "~/components/navigationHome.vue"
import addForm from "~/components/addForm.vue"
import footernav from "~/components/footernav.vue"

export default {
  components:{
    navigationHome,
    addForm,
    footernav
  }  
}
</script>