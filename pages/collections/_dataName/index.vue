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
          <filterBoxWithBrand :filter-items="filterItem" />
          <br>
          <popularBox data-aos="fade-in" />
        </b-col>
        <b-col lg="9" md="9" sm="12" cols="12">
          <b-sidebar id="sidebar-1" width="250px" shadow>
            <div class="mx-4 py-2">
              <filterBoxWithBrand :filter-items="filterItem" />
            </div>
          </b-sidebar>
          <div class="allFanContent">
            <categoryHeader :content-info="headingData" :route="this.$route.params.dataName" />
            <b-row>
              <div v-b-toggle.sidebar-1 class="filter_mobile_bar d-block d-md-none">
                Filter
              </div>
              <div class="productListHeader mt-3 mt-lg-5 mb-3">
                <div class="listgridChanger mt-1">
                  <img class="list_grid grid" src="/grid.png" :class="{active: view == 'grid'}" @click="changeView('grid')">
                  <img class="list_grid list" src="/list.png" :class="{active: view == 'list'}" @click="changeView('list')">
                </div>
                <small class="mt-3">showing {{ startId }} - {{ stopId }} of {{ lengthOfProducts }}</small>
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
                <hr v-show="view == 'list'" :products="fan">

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
import filterByBrand from '@/mixins/filterByBrand'
import filterBoxWithBrand from '@/components/allFans/filterBoxWithBrand'
import popularBox from '@/components/allFans/popularProducts'
import categoryHeader from '@/components/productView/categoryHeader'
import sort from '@/mixins/sort'

export default {
  components: {
    breadCumb,
    ProductCard,
    filterBoxWithBrand,
    categoryHeader,
    ProductCardList,
    popularBox
  },
  mixins: [filterByBrand, sort],
  data () {
    return {
      filterItem: [],
      startId: 1,
      stopId: 24,
      view: 'grid',
      headingData,
      current: 1,
      value: 'all',
      display: [],
      filterValue: '',
      routename: '',
      breadCumbItems: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'All Fans',
        link: '/collections/allFans',
        active: true
      }]
    }
  },
  computed: {
    lengthOfProducts () {
      return this[this.routeName].length
    }
  },
  created () {
    this.$store.dispatch('dataStore/setRouteName', this.$route.params.dataName)
  },
  mounted () {
    this.setInitialValue()
  },
  methods: {
    turn2Real (value) {
      switch (value) {
        case 'fan' :
          return 'All Fans'
        case 'mosquitoKiller' :
          return 'Mosquito Killers'
        case 'iron' :
          return 'Irons'
        case 'insect_repellent' :
          return 'Insect Repellents'
        case 'vaccum' :
          return 'vaccum Cleaners'
      }
    }
  },
  head () {
    return {
      title: this.turn2Real(this.$store.getters['dataStore/getRouteName']),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Powerpac MM'
        }
      ]
    }
  }

}
</script>

<style scoped>
select {
   border:0px;
   outline:0px;
   background: white;
}
.grid{
  width: 25px;
  height: 25px;
  cursor: pointer;
  opacity: 0.5;
}
.list{
  width: 35px;
  height: 38px;
  cursor: pointer;
  opacity: 0.5;
}
.active{
  opacity: 1;
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
