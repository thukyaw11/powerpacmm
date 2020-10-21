<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <b-container>
      <b-row>
        <b-col xs="12" sm="12" lg="6" md="6">
          <div class="image_container">
            <img :src="singleItem.imageURL" alt="" class="product_image">
          </div>
        </b-col>
        <b-col xs="12" sm="12" lg="6" md="6">
          <div class="product_detail_text_container">
            <div class="product_header">
              <h5><b>IFAN EVAPORATIVE AIR COOLER (IF7310)</b> </h5>
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
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import { fan } from '@/static/content/allFan'
import { mosquitoKiller } from '@/static/content/mosquitoKiller'

export default {
  components: {
    breadCumb
  },
  data () {
    return {
      fan,
      mosquitoKiller
    }
  },
  computed: {
    singleItem () {
      return this.fan.find(element => element.navigator === this.$route.params.singleData)
    },
    breadCumbItems () {
      return [{
        text: 'Home / ',
        link: '/'
      },
      {
        text: `${this.productNameConvertor(this.singleItem.type)} /`,
        link: `/collections/${this.singleItem.type}`
      },
      {
        text: this.singleItem.productName,
        link: `/collections/${this.singleItem.type}/${this.singleItem.navigator}`,
        active: true
      }]
    }
  },
  methods: {
    productNameConvertor (nameInSmall) {
      switch (nameInSmall) {
        case 'fan':
          return 'All Fans'
        case 'mosquitoKiller':
          return 'Mosquito Killer'
      }
    }
  }
}
</script>

<style scoped>
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
  padding: 30px;
}
.product_image{
  width: 100%;
  height: 100%;
}
.product_detail_text_container{
  width: 100%;
  height: 500px;
  padding: 10px;
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
</style>
