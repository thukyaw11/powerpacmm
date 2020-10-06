<template>
  <div>
    <breadCumb :items="breadCumbItems" />
    <br>
    <b-container>
      <b-row>
        <b-col
          lg="3"
          md="3"
          sm="0"
          cols="0"
          class="d-none d-lg-block d-md-block"
        >
          <div class="filter_box">
            <div class="title">
              <h6>FILTER BY TYPE</h6>
            </div>
            <div class="filter_content">
              <nuxt-link :to="switchLocalePath('en')">
                English
              </nuxt-link>
              <nuxt-link :to="switchLocalePath('mm')">
                Myanmar
              </nuxt-link>
              <div class="content_child">
                <a-radio-group v-model="value" @change="onChange">
                  <a-radio value="all" class="brand_radio">
                    All
                  </a-radio>
                  <br>
                  <a-radio value="iFan" class="brand_radio">
                    {{ $t('message') }}
                  </a-radio>
                  <br>
                  <a-radio value="PowrPac" class="brand_radio">
                    PowerPac
                  </a-radio>
                  <br>
                </a-radio-group>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="9" md="9" sm="12" cols="12">
          <div class="allFanContent">
            <div class="heading">
              {{ allFanInfo.title }}
            </div>
            <div class="row">
              <div class="content_image_container">
                <img :src="allFanInfo.imageURL" alt="" class="content_image">
              </div>
              <div class="content_text_cotainer">
                <div class="content_text_header">
                  {{ allFanInfo.header }}
                </div>
                <div class="content_text_para">
                  {{ allFanInfo.content }}
                </div>
              </div>
            </div>
          </div>
          <b-row>
            <b-col v-for="fan in display" :key="fan.id" cols="3">
              <ProductCard :products="fan" />
            </b-col>
          </b-row>
          <a-pagination v-model="current" :total="totalPages" show-less-items />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import breadCumb from '@/components/mainpageBody/breadCumnb'
import { AllFans } from '@/static/content/allFan'
import { allFanInfo } from '@/static/content/allFanInfo'
import ProductCard from '@/components/productCard'

export default {
  components: {
    breadCumb,
    ProductCard
  },
  data () {
    return {
      AllFans,
      allFanInfo,
      current: 1,
      value: 'all',
      display: [],
      checkList: [],
      iFanCheck: false,
      PowerPacCheck: false,
      filterValue: '',
      totalPages: AllFans.length / 24 * 10,
      breadCumbItems: [{
        text: 'Home / ',
        link: '/'
      },
      {
        text: 'All Fans',
        link: '/collections/allFans',
        active: true
      }]
    }
  },
  watch: {
    current (val) {
      this.current = val
      // eslint-disable-next-line no-console
      this.display = this.AllFans.filter(element => element.id <= val * 24 && element.id > (val * 24) - 24)
    }
  },
  mounted () {
    this.setInitialValue()
  },
  methods: {
    // onChange (value) {
    //   // eslint-disable-next-line no-console
    //   console.log(value)
    //   // console.log(checkValue)
    //   // // eslint-disable-next-line no-console
    //   // console.log(this[checkValue])
    //   // this[checkValue] = !this[checkValue]
    //   // this[checkValue] ? this.setFilteredData(checkBrand) : this.setInitialValue()
    // },
    onChange (e) {
      e.target.value && e.target.value !== 'all' ? this.setFilteredData(e.target.value) : this.setInitialValue()
      if (e.target.value === 'all') {
        this.setInitialValue()
      }
    },
    setInitialValue () {
      this.totalPages = AllFans.length / 24 * 10

      this.display = this.AllFans.filter(element => element.id <= (this.current * 24) && element.id > (this.current * 24) - 24)
    },
    setFilteredData (checkBrand) {
      this.display = this.AllFans.filter(element => element.brand === checkBrand)

      this.totalPages = 10
    }
  },

  head: {
    title: 'All Fans',
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
.filter_box{
  width: 100%;
  height: 300px;
  border: 1px solid #F5F5F5;
}
.title{
  background: #F5F5F5;
  padding: 8px;
}
.content_child{
  padding: 20px;
}
.brand_radio{
  padding: 10px;
}
.allFanContent{
  height: 200px;
  width: 100%;
  padding: 10px;
}
.row{
  justify-content: space-between;
}
.heading{
  font-weight: bold;
  font-size: 25px;
}
.content_image_container{
  float: left;
  width: 50%;
  padding: 10px;
  height: 150px;
}
.content_text_cotainer{
  float: left;
  width: 50%;
  height: 100%;
  padding: 14px 10px;
}
.content_image{
  width: 100%;
  height: 100%;
  border-radius: 0px 40px 40px 0px;
}

</style>
