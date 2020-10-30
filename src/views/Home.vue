<template>
  <div class="home">
    <vs-row class="mt-5">
     <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
      <CategoryList />
     </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8">
        <Product />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import CategoryList from '../components/CategoryList'
import Product from '../views/Product'

export default {
  name: 'Home',
  components : {
    CategoryList,
    Product
  }
}
</script>
