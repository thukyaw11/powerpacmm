<template>
  <div class="product_card" data-aos="zoom-in">
    <div class="product_image_container">
      <img :src="product_detail.imageURL" alt="" class="product_image">
      <div class="overlay">
        Click to buy
      </div>
      <div v-if="product_detail.sale" class="sale_badge">
        sale
      </div>
    </div>

    <div class="product_content mt-2">
      {{ product_detail.productName }}
    </div>
    <div class="product_rating">
      <b-form-rating id="rating-lg-no-border" v-model="product_detail.rating" readonly no-border variant="warning" />
    </div>
    <div class="row">
      <div class="real_price pr-3">
        {{ product_detail.realPrice }} MMK
      </div>
      <div class="promo_price">
        {{ product_detail.price }} MMK
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  computed: {
    product_detail () {
      return this.products
    }
  }
}
</script>

<style scoped>
.product_card{
  width: 100%;
  height: 430px;
}
.product_image_container{
  width: 150px;
  margin: 0 auto;
  height: 60%;
  background: blanchedalmond;

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
      padding: 5px;

}
.product_content{
  min-height: 30px;
  width: 100%;
  padding: 10px 0px;

}
.product_rating{
  height: 50px;
  width: 20%;
}
.row{
    widows: 20%;
  display: flex;
}
.real_price{
    font-size: 14px;
  color: #C4C4C4;
  text-decoration: line-through;
}
</style>
