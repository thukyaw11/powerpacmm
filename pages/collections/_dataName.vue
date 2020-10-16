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
            <categoryHeader :content-info="headingData" :route="this.$route.params.dataName" />
            <b-row>
              <div v-b-toggle.sidebar-1 class="filter_mobile_bar d-block d-md-none">
                Filters
              </div>
              <div class="productListHeader mt-3 mt-lg-5 mb-3">
                <div class="listgridChanger mt-1">
                  <ion-icon class="list_grid grid" :name="view == 'grid' ? 'grid' : 'grid-outline'" @click="changeView('grid')" />
                  <ion-icon class="list_grid list" :name="view == 'list' ? 'list' : 'list-outline'" @click="changeView('list')" />
                </div>
                <!-- <small class="mt-3">showing {{ startId }} - {{ stopId }} of {{ AllFans.length }}</small> -->
                <select id="sortBy" v-model="selectedSortOption" @change="changeSortValue($event.target.value)">
                  <option
                    v-for="(option,index) in options"
                    :key="index"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>

              <b-col
                v-for="fan in display"
                :key="fan.id"
                :lg="view == 'grid' ? 3 : null"
                :md="view == 'grid' ? 4 : null"
                :sm="view == 'grid' ? 3 : null"
                cols="12"
                class="p-1"
              >
                <ProductCard v-show="view == 'grid'" :products="fan" />
                <ProductCardList v-show="view == 'list'" :products="fan" />

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
import headingData from '@/static/content/headingInfo'
import ProductCard from '@/components/productCard'
import ProductCardList from '@/components/productCardList'
import fanFilter from '@/mixins/fanFilter'
import filterBox from '@/components/allFans/filterBox'
import categoryHeader from '@/components/productView/categoryHeader'
import sort from '@/mixins/sort'

export default {
  components: {
    breadCumb,
    ProductCard,
    filterBox,
    categoryHeader,
    ProductCardList
  },
  mixins: [fanFilter, sort],
  data () {
    return {
      startId: 1,
      stopId: 24,
      view: 'grid',
      headingData,
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
select {
   border:0px;
   outline:0px;
   background: white;
}
.list{
  cursor: pointer;
  font-size: 32px;
}
.grid{
  font-size: 25px;
  cursor: pointer;
}
.list_grid:hover{
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
