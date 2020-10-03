<template>
  <div>
    <carousel per-page="1" pagination-active-color="#4685CC" pagination-position="bottom-overlay">
      <slide>
        <img
          src="/home_banner_one.jpg"
          alt=""
          class="banner_image"
          data-index="0"
          data-name="productone"
          @slideclick="handleSlideClick"
        >
      </slide>
      <slide>
        <img src="/home_banner_two.jpg" alt="" class="banner_image">
      </slide>
      <slide>
        <img src="/home_banner_three.jpg" alt="" class="banner_image">
      </slide>
    </carousel>
    <b-container>
      <h4 class="sub_title">OUR BRANDS</h4>
        <b-row class="brand_cardcontainer">
          <b-col cols="4">
            <b-card class="brand_card">
               <b-img center src="/brandlogo/powerpac.png" alt="" class="brand_image"></b-img>
            </b-card>
            </b-col>
          <b-col cols="4">
            <b-card class="brand_card">
               <b-img center src="/brandlogo/ifanlogo.png" alt="" class="brand_image" ></b-img>
            </b-card>
          </b-col>
          <b-col cols="4">
            <b-card class="brand_card">
               <b-img center src="/brandlogo/mychoicelogo.png" alt="" class="brand_image" ></b-img>
            </b-card>
          </b-col>
        </b-row>
    </b-container>
    <b-container>
      <h4 class="sub_title">NEW RELEASES</h4>
        <b-row>
          <b-col cols="3">
            <b-card img-src="/multi/coffeemaker.jpg" img-alt="Image" img-top>
              <b-card-text class="card_text">
               Bear Digital Lunch Box
               Micro-computer Baby
               Multipurpose Cooker Mini
              <b-form-rating id="rating-lg-no-border" v-model="value" no-border variant="warning"></b-form-rating>
              <b-card-text class="price_textbox row">
                <b-card-text class="promo_text">
                  30,000 MMK
                </b-card-text>
                <b-card-text>
                  25,000 MMK
                </b-card-text>
              </b-card-text>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="3">
            <b-card img-src="/multi/oven.jpg" img-alt="Image" img-top>
              <b-card-text class="card_text">
               Bear Digital Lunch Box
               Micro-computer Baby
               Multipurpose Cooker Mini
              <b-form-rating id="rating-lg-no-border" v-model="value" no-border variant="warning"></b-form-rating>
              <b-card-text class="price_textbox row">
                <b-card-text class="promo_text">
                  30,000 MMK
                </b-card-text>
                <b-card-text>
                  25,000 MMK
                </b-card-text>
              </b-card-text>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="3">
            <b-card img-src="/multi/kettle.jpg" img-alt="Image" img-top>
              <b-card-text class="card_text">
               Bear Digital Lunch Box
               Micro-computer Baby
               Multipurpose Cooker Mini
              <b-form-rating id="rating-lg-no-border" v-model="value" no-border variant="warning"></b-form-rating>
              <b-card-text class="price_textbox row">
                <b-card-text class="promo_text">
                  30,000 MMK
                </b-card-text>
                <b-card-text>
                  25,000 MMK
                </b-card-text>
              </b-card-text>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="3">
            <b-card img-src="/multi/viruskiller.jpg" img-alt="Image" img-top>
              <b-card-text class="card_text">
               Bear Digital Lunch Box
               Micro-computer Baby
               Multipurpose Cooker Mini
              <b-form-rating id="rating-lg-no-border" v-model="value" no-border variant="warning"></b-form-rating>
              <b-card-text class="price_textbox row">
                <b-card-text class="promo_text">
                  30,000 MMK
                </b-card-text>
                <b-card-text>
                  25,000 MMK
                </b-card-text>
              </b-card-text>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  methods: {
    handleSlideClick (dataset) {
      // eslint-disable-next-line no-console
      console.log(dataset.index, dataset.name)
    }
  },

  head: {
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Powerpac MM'
      }
    ]
  }
}
</script>

<style scoped>
.banner_image{
  width: 100%;
  height: 600px;

}
.brand_cardcontainer{
  display: flex;
  padding-left: 190px;
  padding-right: 190px;
}
.brand_card{
  width: 200px;
  height: 102px;
  background-color: #E7EFF8;
}
.brand_image{
  width: 100px;
  padding: 10px;
  background-color: #E7EFF8;
}
.sub_title{
  padding:40px;
  text-align: center;
  font-family: 'Poppins';
  font-size: 30px;
}
.price_textbox{
  justify-content: space-around;
}
.card_text{
  font-size: 14px;
  text-align: center;
}
.promo_text{
  font-size: 14px;
  color: #C4C4C4;
  text-decoration: line-through;
}
@media screen and (max-width: 991px) {
  .banner_image{
    height: 300px;
}
}
@media screen and (max-width: 460px) {
  .banner_image{
    height: 200px;
}
}
</style>
