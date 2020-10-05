<template>
  <b-container class="mt-5 mb-5 title">
    <h4 class="text-center">
     TRENDING NOW
    </h4>
    <hr class="divider">
    <b-row class="mt-4">
      <b-col v-for="(trandings, index) in trandingss" :key="index" cols="4">
        <div class="trandings_card m-0 p-0" data-aos="zoom-in">
          <h1 class="trandings_types">teanding</h1>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      trandingss: ['', '', '']
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
.trandings_card{
  background-color: #E7EFF8;
  padding: 0;
  margin: 0;
}
.trandings_types{
  width: 213px;
  height: 90px;
  padding: 20px;
  background-color: #E7EFF8;
}
@media screen and (max-width: 991px) {
.trandings_types{
    width: 100%;
    height: 100px;
    padding: 10px;

}
}
@media screen and (max-width: 460px) {
.trandings_types{
  width: 100%;
  height: 90px;
  padding: 10px;
}
}
</style>
