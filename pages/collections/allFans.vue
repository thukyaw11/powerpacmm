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
          <filterBox />
        </b-col>
        <b-col lg="9" md="9" sm="12" cols="12">
          <b-sidebar id="sidebar-1" width="250px" shadow>
            <div class="mx-4 py-2">
              <filterBox />
            </div>
          </b-sidebar>
          <div class="allFanContent">
            <categoryHeader :content-info="allFanInfo" />
            <b-row>
              <div v-b-toggle.sidebar-1 class="filter_mobile_bar d-block d-md-none">
                Filters
              </div>
              <div class="productListHeader mt-3 mt-lg-5 mb-3">
                <div class="listgridChanger mt-2">
                  <img src="/grid.png" class="gridlist_photo" :class="{active: view == 'grid'}" @click="changeView('grid')">
                  <img src="/list.png" class="gridlist_photo" :class="{active: view == 'list'}" @click="changeView('list')">
                </div>
                <h1>here two</h1>
                <h1>here three</h1>
              </div>

              <b-col
                v-for="fan in display"
                :key="fan.id"
                lg="3"
                md="3"
                sm="6"
                cols="6"
                class="p-1"
              >
                <ProductCard v-show="view == 'grid'" :products="fan" />
                <h1 v-show="view == 'list'">
                  this is in list view
                </h1>
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
import { allFanInfo } from '@/static/content/allFanInfo'
import ProductCard from '@/components/productCard'
import fanFilter from '@/mixins/fanFilter'
import filterBox from '@/components/allFans/filterBox'
import categoryHeader from '@/components/productView/categoryHeader'

export default {
  components: {
    breadCumb,
    ProductCard,
    filterBox,
    categoryHeader
  },
  mixins: [fanFilter],
  data () {
    return {
      view: 'list',
      allFanInfo,
      current: 1,
      value: 'all',
      display: [],
      filterValue: '',
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
  mounted () {
    this.setInitialValue()
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

.gridlist_photo{
  cursor: pointer;
  height: 30px;
  width: 30px;
  opacity: 0.5;
}
.gridlist_photo:hover{
  opacity: 1;
}
.active{
  opacity: 1;
}

.col{
  padding: 0px;
}

.allFanContent{
  height: 200px;
  width: 100%;
  padding: 10px;
}
.row{
  justify-content: space-between;
}

.productListHeader{
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  display: flex;
  justify-content: space-between;
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
