<template>
  <div class="about">
    <HelloWorld/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'about',
  components: {
    HelloWorld
  }
}
</script>
