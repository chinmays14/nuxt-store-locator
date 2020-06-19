<template>
  <div class="main">
    <h1>Store Locator</h1>
    <ProductList v-if="productlistshow"/>
    <GoogleMap v-if="googlemapshow"/>
  </div>
</template>

<script>
  import ProductList from "../components/ProductList";
  import GoogleMap from '../components/GoogleMap'

  export default {
    name: 'index',
    components: {ProductList, GoogleMap},
    data() {
      return {}
    },
    computed:{
      productlistshow() {
        return this.$store.state.productlistshow;
      },
      googlemapshow() {
        return this.$store.state.googlemapshow;
      }
    }
  }
</script>

<style>
. body {
  font-family: 'Open Sans',sans-serif;
}

h1 {
  font-size: 32px;
  font-style: italic;
  margin-bottom: 10px;
}
</style>
