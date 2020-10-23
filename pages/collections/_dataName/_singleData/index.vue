<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <b-container>
      <b-row>
        <b-col xs="12" sm="12" lg="6" md="6">
          <div class="image_container">
            <img :src="singleZoomImage" class="product_image">
          </div>
          <carousel
            class="carousel"
            :navigation-enabled="true"
            :navigation-next-label="nextLabel"
            :navigation-prev-label="prevLabel"
            per-page="5"
            pagination-active-color="#4685CC"
            pagination-position="bottom-overlay"
            :scroll-per-page="true"
            :pagination-enabled="false"
          >
            <slide
              v-for="(singleImage,index) in getProductImageFile"
              :key="index"
            >
              <img :src="singleImage" alt="" class="image_slide" @click="changeMainImage(index+1)">
            </slide>
          </carousel>
          <br>
        </b-col>
        <b-col xs="12" sm="12" lg="6" md="6">
          <div class="product_detail_text_container">
            <div class="product_header">
              <h5><b>{{ singleItem.productName }}</b> </h5>
            </div>
            <div class="product_review">
              <small>
                <b-form-rating id="rating-lg-no-border" v-model="singleItem.rating" readonly no-border variant="warning" />

              </small>
            </div>
            <div class="price_row">
              <div v-show="singleItem.realPrice != ''" class="real_price">
                <p>{{ singleItem.realPrice }} MMK</p>
              </div>
              <div class="promo_price">
                <p>{{ singleItem.promoPrice }} MMK</p>
              </div>
            </div>
            <hr>
            <table class="product_info">
              <tr>
                <td>
                  AVAILABILITY:
                </td>
                <td :class="singleItem.sale? 'green' : 'grey'">
                  {{ singleItem.sale? 'in stock' : 'out off stock' }}
                </td>
              </tr>
              <tr>
                <td>
                  PRODUCT TYPE:
                </td>
                <td>
                  {{ singleItem.productType }}
                </td>
              </tr>
              <tr>
                <td>
                  PRODUCT VENDOR:
                </td>
                <td>
                  {{ singleItem.brand }}
                </td>
              </tr>
            </table>
            <hr>
            <a href="https://bit.ly/2TdU34A" target="_blank">
              <div class="buy_now_btn">
                <p class="add_cart_text">
                  <shopping class="add_cart_img" />
                  BUY NOW
                </p>
              </div>
            </a>
            <hr>
            <ShareNetwork
              network="facebook"
              url="https://news.vuejs.org/issues/180"
              :title="singleItem.productName"
              :quote="singleItem.productName"
              hashtags="powerpacmm"
              style="color: black"
            >
              <facebookIcon class="_svg facebook" />
              Share
            </ShareNetwork>
            <ShareNetwork
              class="email_share"
              network="email"
              url="https://news.vuejs.org/issues/180"
              :title="singleItem.productName"
              :description="'grab' + singleItem.productName + 'on powerpac Myanmar'"
              hashtags="powerpacmm"
              style="color: black"
            >
              <email class="_svg" />
              Share
            </ShareNetwork>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <h3>Product Detail</h3>
          <ul v-for="(detail,index) in singleItem.detail" :key="index">
            <li> {{ detail }} </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import { fan } from '@/static/content/allFan'
import { mosquitoKiller } from '@/static/content/mosquitoKiller'
import { iron } from '@/static/content/iron'
// eslint-disable-next-line camelcase
import { insect_repellent } from '@/static/content/insect_repellent'
import { vaccum } from '@/static/content/vaccum'
import shopping from '@/assets/svg/shopping-cart.svg'
import facebookIcon from '@/assets/svg/facebook-app-logo.svg'
import email from '@/assets/svg/gmail.svg'
export default {
  components: {
    breadCumb,
    shopping,
    email,
    facebookIcon
  },
  data () {
    return {
      fan,
      mosquitoKiller,
      iron,
      insect_repellent,
      vaccum,
      nextLabel: "<img src='/chevron-right.png' />",
      prevLabel: "<img src='/chevron-left.png' />",
      singleName: '',
      imageIndex: 1
    }
  },
  computed: {
    singleItem () {
      return this[this.singleName].find(element => element.navigator === this.$route.params.singleData)
    },
    getProductImageFile () {
      const imageArray = []
      for (let i = 1; i <= this.singleItem.imageCount; i++) {
        imageArray.push(`/homeapplicant/${this.singleItem.type}/${this.singleItem.id}/${i}.jpg`)
      }

      return imageArray
    },
    singleZoomImage () {
      return `/homeapplicant/${this.singleItem.type}/${this.singleItem.id}/${this.imageIndex}.jpg`
    },
    breadCumbItems () {
      return [{
        text: 'Home',
        link: '/'
      },
      {
        text: `${this.productNameConvertor(this.singleItem.type)}`,
        link: `/collections/${this.singleItem.type}`
      },
      {
        text: this.singleItem.productName,
        link: `/collections/${this.singleItem.type}/${this.singleItem.navigator}`,
        active: true
      }]
    }
  },
  created () {
    this.singleName = this.$route.params.dataName
  },
  methods: {
    changeMainImage (index) {
      this.imageIndex = index
    },

    productNameConvertor (nameInSmall) {
      switch (nameInSmall) {
        case 'fan':
          return 'All Fans'
        case 'mosquitoKiller':
          return 'Mosquito Killer'
        case 'iron':
          return 'Irons'
        case 'insect_repellent':
          return 'Insect Repellents'
        case 'vaccum':
          return 'Vaccum Cleaners'
      }
    }
  }
}
</script>

<style scoped>
.carousel{
  margin: 0px 20px;
}
.image_slide{
  height: 100px;
  width: 90px;
  cursor: pointer;
}
.email_share{
  margin-left: 10px;
}
._svg{
  width: 15px;
  height: 15px;
}
.facebook{
  fill: blue;
}
.buy_now_btn{
  width: 100%;
  height: 40px;
  background-color: #006CDD;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
}
.buy_now_btn:hover{
  background-color: #1884f8;
}

.add_cart_img{
  width: 19px;
  height: 19px;
  fill: yellow;
}
.add_cart_text{
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: yellow;
  font-weight: bold;
}

td{
  padding: 6px;
}
.green{
  color: green;
}
.grey{
  color: grey;
}
.image_container{
  width: 100%;
  height: 500px;
  padding: 10px;
}
.product_image{
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.product_detail_text_container{
  width: 100%;
  height: 500px;
  padding: 0px 10px;
}
.price_row{
  display: flex;
  justify-content: space-between;
  width: 300px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.real_price{
  font-size: 30px;
  text-decoration: line-through;
}
.promo_price{
  font-size: 30px;
  color: #FC6F3C;
}
.product_review{
  width:90px;
}
@media screen and (max-width: 500px) {
.product_image{
  margin-top: 50px;
  width: 100%;
  height: 70%;
}
}
</style>
