<template>
  <div id="app">
    <Layout />
    <div class="container-fluid mt-6">
      <router-view />
    </div>
  </div>
</template>

<script>
import Layout from './components/Layout'

export default {
  components: {
    Layout
  },
  methods: {

  },
  mounted () {
    
  }
}
</script>

<style>

</style>
