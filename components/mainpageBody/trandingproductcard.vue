<template>
  <b-container>
    <carousel
      per-page="1"
      pagination-active-color="#4685CC"
      pagination-position="bottom-overlay"
      :scroll-per-page="true"
      :per-page-custom="[[300, 2], [500,2], [991, 5]]"
      class="mt-4 mb-5"
    >
      <slide
        v-for="(newRelease,index) in newReleases"
        :key="index"
      >
        <div class="product_card" data-aos="zoom-in" cols="3">
          <div class="product_image_container">
            <img :src="newRelease.imageURL" alt="" class="product_image">
            <div class="overlay">
              Click to buy
            </div>
            <div v-if="newRelease.sale" class="sale_badge">
              sale
            </div>
          </div>

          <div class="product_content">
            {{ newRelease.productName }}
          </div>
          <div class="product_rating">
            <b-form-rating id="rating-lg-no-border" v-model="newRelease.rating" readonly no-border variant="warning" />
          </div>
          <div class="row">
            <div class="real_price">
              {{ newRelease.realPrice }} MMK
            </div>
            <div class="promo_price">
              {{ newRelease.promoPrice }} MMK
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </b-container>
</template>

<script>

import { newReleases } from '@/static/content/newRelease'
export default {
  data () {
    return {
      newReleases
    }
  }
}

</script>

<style scoped>
.product_card{
  width: 100%;
  height: 400px;
}
.product_image_container{
  width: 100%;
  height: 50%;

    position: relative;

}
.product_image_container:hover .overlay {
  opacity: 1;
}
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 90%;
  height: 90%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 80px 30px 30px 30px;
  text-align: center;
  margin: 10px;
  cursor: pointer;

}

.sale_badge{
  position: absolute;
  width: 50px;
  height: 25px;
  line-height: 25px;
  background: red;
  color: #fff;
  text-align: center;
  right: 0;
  bottom: 0;
  font-family: "Poppins";
}
.product_image{
  width: 100%;
  height: 100%;
padding: 10px;

}
.product_content{
  min-height: 90px;
  width: 100%;
  padding: 10px;
  text-align: center;
}
.product_rating{
  height: 50px;
  width: 80%;
  margin: 0 auto;
}
.row{
  display: flex;
  justify-content: space-around;
}
.real_price{
    font-size: 14px;
  color: #C4C4C4;
  text-decoration: line-through;
}
.divider{
    border: 1px solid #4685CC;
    width: 80px;
    margin: 0 auto;
}
</style>
