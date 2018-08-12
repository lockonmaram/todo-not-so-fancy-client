<template>
  <v-app id="inspire" dark>
   <NavBar/>
   <Content/>
   <Footer/>
 </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

  export default {
    components: {
      NavBar,
      Content,
      Footer,
    }
  }
</script>
