<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <b-container>
      <b-row>
        <b-col
          xs="12"
          sm="12"
          lg="6"
          md="6"
        >
          <div class="image_container">
            <img
              :src="singleZoomImage"
              class="product_image"
            >
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
              <img
                :src="singleImage"
                alt=""
                class="image_slide"
                @click="changeMainImage(index+1)"
              >
            </slide>
          </carousel>
          <br>
        </b-col>
        <b-col
          xs="12"
          sm="12"
          lg="6"
          md="6"
        >
          <div class="product_detail_text_container">
            <div class="product_header">
              <b-row>
                <b-col cols="10">
                  <h5 class="product_header_content">
                    <b>{{ singleItem.productName }}</b>
                  </h5>
                </b-col>
                <b-col cols="2">
                  <productSwitchArrow
                    :prev-product="previousProduct"
                    :next-product="nextProduct"
                  />
                </b-col>
              </b-row>
            </div>
            <div class="product_review">
              <small>
                <b-form-rating
                  id="rating-lg-no-border"
                  v-model="singleItem.rating"
                  readonly
                  no-border
                  variant="warning"
                />

              </small>
            </div>
            <div class="price_row">
              <div
                v-show="singleItem.realPrice != ''"
                class="real_price"
              >
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
            <a
              href="https://bit.ly/2TdU34A"
              target="_blank"
            >
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
          <div class="detail_header">
            <p>PRODUCT DETAIL</p>
          </div>
          <ul
            v-for="(detail,index) in singleItem.detail"
            :key="index"
            class="detail_list"
          >
            <li>
              <detailTick /> <span style="margin-left: 10px"> {{ detail }} </span>
            </li>
          </ul>
          <randomText :product-name="singleItem.productName" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import productSwitchArrow from '@/components/dataView/productSwitchArrow'
import randomText from '@/components/dataView/randomText'
// importing svg
import shopping from '@/assets/svg/shopping-cart.svg'
import facebookIcon from '@/assets/svg/facebook-app-logo.svg'
import detailTick from '@/assets/svg/detail_tick.svg'
import email from '@/assets/svg/gmail.svg'

// importing data
import { fan } from '@/static/content/allFan'
import { mosquitoKiller } from '@/static/content/mosquitoKiller'
import { iron } from '@/static/content/iron'
// eslint-disable-next-line camelcase
import { insect_repellent } from '@/static/content/insect_repellent'
import { vaccum } from '@/static/content/vaccum'
import { fridge } from '@/static/content/fridge'
import { jug } from '~/static/content/jug'
import { cooker } from '~/static/content/cooker'
import { steamboat } from '~/static/content/steamboat'
import { blender } from '~/static/content/blender'
import { chopper } from '~/static/content/chopper'
import { ovan } from '~/static/content/ovan'
import { toaster } from '~/static/content/toaster'
import { fryer } from '~/static/content/fryer'
export default {
  components: {
    breadCumb,
    shopping,
    email,
    facebookIcon,
    detailTick,
    productSwitchArrow,
    randomText
  },
  data () {
    return {
      fan,
      mosquitoKiller,
      iron,
      insect_repellent,
      vaccum,
      fridge,
      jug,
      cooker,
      steamboat,
      blender,
      chopper,
      ovan,
      toaster,
      fryer,
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
    relatedProducts () {
      const relatedP = []
      this[this.singleName].forEach((element) => {
        if (element.productType === this.singleItem.productType) {
          relatedP.push(element)
        }
      })
      return relatedP
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
    },
    previousProduct () {
      return this.singleItem.id !== 1 ? this[this.singleName].find(element => element.id === this.singleItem.id - 1) : null
    },
    nextProduct () {
      // eslint-disable-next-line no-console
      console.log(this[this.singleName].length)
      return this.singleItem.id < this[this.singleName].length ? this[this.singleName].find(element => element.id === this.singleItem.id + 1) : null
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
        case 'fridge':
          return 'Fridge'
        case 'jug':
          return 'Electric Jug/Kettles'
        case 'cooker':
          return 'Cooker'
        case 'steamboat':
          return 'Steam Boat'
        case 'blender':
          return 'Blender'
        case 'chopper':
          return 'Chopper'
        case 'ovan':
          return 'Ovan'
        case 'toaster':
          return 'Toaster'
        case 'fryer':
          return 'Fryer'
      }
    }
  }
}
</script>

<style scoped>
.product_header {
  width: 100%;
}
.detail_list {
  list-style-type: none;
}
.detail_header {
  width: 150px;
  height: 40px;
  background: black;
  color: white;
  margin-bottom: 30px;
}
.detail_header p {
  font-size: 15px;
  text-align: center;
  line-height: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.carousel {
  margin: 0px 20px;
}
.image_slide {
  height: 100px;
  width: 90px;
  cursor: pointer;
}
.email_share {
  margin-left: 10px;
}
._svg {
  width: 15px;
  height: 15px;
}
.facebook {
  fill: blue;
}
.buy_now_btn {
  width: 100%;
  height: 40px;
  background-color: #006cdd;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
}
.buy_now_btn:hover {
  background-color: #1884f8;
}

.add_cart_img {
  width: 19px;
  height: 19px;
  fill: yellow;
}
.add_cart_text {
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: yellow;
  font-weight: bold;
}

td {
  padding: 6px;
}
.green {
  color: green;
}
.grey {
  color: grey;
}
.image_container {
  width: 100%;
  height: 500px;
  padding: 10px;
}
.product_image {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.product_detail_text_container {
  width: 100%;
  height: 500px;
  padding: 0px 10px;
}
.price_row {
  display: flex;
  justify-content: space-between;
  width: 300px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.real_price {
  font-size: 30px;
  text-decoration: line-through;
}
.promo_price {
  font-size: 30px;
  color: #fc6f3c;
}
.product_review {
  width: 90px;
}
@media screen and (max-width: 500px) {
  .product_image {
    margin-top: 50px;
    width: 100%;
    height: 70%;
  }
}
</style>
