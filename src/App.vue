<template>
  <div id="app">
    <Layout />
    <div class="container-fluid mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import Layout from './components/Layout'

export default {
  components: {
    Layout
  }
}
</script>

<style>

</style>
