<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <b-container>
      <b-row>
        <b-col xs="12" sm="12" lg="6" md="6">
          <div class="demo" />
        </b-col>
        <b-col xs="12" sm="12" lg="6" md="6">
          <div class="product_detail_text_container">
            <div class="product_header">
              <h5>IFAN EVAPORATIVE AIR COOLER (IF7310)</h5>
            </div>
            <div class="product_review">
              <small>5</small>
            </div>
            <div class="price_row">
              <div class="real_price">
                <p>1200 MMK</p>
              </div>
              <div class="promo_price">
                <p>9000 MMK</p>
              </div>
            </div>
            <div class="availability">
              <p>yes</p>
            </div>
            <div class="type">
              <p>fan</p>
            </div>
            <div class="vendor">
              <p>Ifan</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
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
.demo{
  width: 100%;
  height: 500px;
  background: red;
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
}
.real_price{
  font-size: 30px;
  text-decoration: line-through;
}
.promo_price{
  font-size: 30px;
  color: #FC6F3C;
}
</style>
