<template>
  <b-container class="mt-5 mb-5 title">
    <h4 class="text-center">
     WE MAKE YOUR HOME GREAT
    </h4>
    <hr class="divider">
    <b-row class="mt-4">
      <b-col v-for="(products, index) in productss" :key="index" cols="3">
        <div class="products_card m-0 p-0" data-aos="zoom-in">
          <h1 class="products_types">hello</h1>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      productss: ['', '', '', '']
    }
  }
}
</script>
<style scoped>
.title {
    font-family: "Poppins";
}
.divider{
    border: 1px solid #4685CC;
    width: 80px;
    margin: 0 auto;
}
.products_card{
  background-color: #E7EFF8;
  padding: 0;
  margin: 0;
}
.products_types{
  width: 262px;
  height: 108px;
  padding: 20px;
  background-color: #E7EFF8;
}
@media screen and (max-width: 991px) {
.products_types{
    width: 100%;
    height: 100px;
    padding: 10px;

}
}
@media screen and (max-width: 460px) {
.products_types{
  width: 100%;
  height: 90px;
  padding: 10px;
}
}
</style>
