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
          <div v-b-toggle.sidebar-1 class="filter_mobile_bar">
            Filters
          </div>
          <b-sidebar id="sidebar-1" width="250px" shadow>
            <div class="mx-4 py-2">
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
            </div>
          </b-sidebar>
          <div class="allFanContent">
            <div class="heading">
              {{ allFanInfo.title }}
            </div>
            <b-row>
              <b-col lg="6" md="6" sm="12" cols="12">
                <div class="content_image_container">
                  <img :src="allFanInfo.imageURL" alt="" class="content_image">
                </div>
              </b-col>
              <b-col lg="6" md="6" sm="12" cols="12">
                <div class="content_text_cotainer">
                  <div class="content_text_header">
                    {{ allFanInfo.header }}
                  </div>
                  <div class="content_text_para">
                    {{ allFanInfo.content }}
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <div class="productListHeader mt-5 mb-3" />

              <b-col
                v-for="fan in display"
                :key="fan.id"
                lg="3"
                md="3"
                sm="6"
                cols="6"
                class="p-1"
              >
                <ProductCard :products="fan" />
                <br>
              </b-col>
            </b-row>
            <a-pagination v-model="current" :total="totalPages" show-less-items />
          </div>
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
.col{
  padding: 0px;
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
  width: 100%;
  height: 150px;
}
.content_text_cotainer{
  float: left;
  width: 100%;
  height: 100%;
  padding: 14px 10px;
}
.content_image{
  width: 100%;
  height: 100%;
  border-radius: 0px 40px 40px 0px;
}
.content_text_header{
  font-weight: bold;
  padding-bottom: 5px;
}
.productListHeader{
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
}
.filter_mobile_bar{
  width: 100%;
  height: 35px;
  background: #4686CD;
  cursor: pointer;
  outline: none;
  text-align: center;
  line-height: 35px;
  color: white;

}
.filter_mobile_bar:focus{
  background: #3f6896;

}
</style>
