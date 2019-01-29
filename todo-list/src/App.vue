<template>

  <div id="Lili">
    <Lala num=5 />
  </div>
</template>

<script>
import Lala from './components/Lala.vue'

export default {
  name: 'lala',
  components: {
    Lala
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
