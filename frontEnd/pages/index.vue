<template>
  <div>
    <navigation-Home/>
    <index/>
    <footernav/>
  </div>
</template>

<script>
import navigationHome from "~/components/navigationHome.vue"
//importando componentes de tela
import footernav from "~/components/footernav.vue"
import index from "~/components/index.vue"
import axis from 'axios'
//importando axios
export default {
  components:{
    navigationHome,
    footernav,
    index
  }
}

</script>