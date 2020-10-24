<template>
  <div class="home">
    <vs-row class="mt-5">
     <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
      <CategoryList />
     </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8">
        <vs-alert class="mx-2">
          <template #title>
            En proceso... <i class="bx bx-loader bx-lg rotate"></i>
          </template>
          Proximamente booking-app
        </vs-alert>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import CategoryList from '../components/CategoryList'

export default {
  name: 'Home',
  components : {
    CategoryList
  }
}
</script>
