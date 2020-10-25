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
          <filterBoxWithBrand :filter-items="filterItemBrand" />
          <br>
          <filterBoxWithProductType :filter-items="filterItemProductType" />
          <popularBox data-aos="fade-in" />
        </b-col>
        <b-col
          lg="9"
          md="9"
          sm="12"
          cols="12"
        >
          <b-sidebar
            id="sidebar-1"
            width="250px"
            shadow
          >
            <div class="mx-4 py-2">
              <filterBoxWithBrand :filter-items="filterItemBrand" />
              <br>
              <filterBoxWithProductType :filter-items="filterItemProductType" />
            </div>
          </b-sidebar>
          <div class="allFanContent">
            <categoryHeader
              :content-info="headingData"
              :route="this.$route.params.dataName"
            />
            <b-row>
              <div
                v-b-toggle.sidebar-1
                class="filter_mobile_bar d-block d-md-none"
              >
                Filter
              </div>
              <div class="productListHeader mt-3 mt-lg-5 mb-3">
                <div class="listgridChanger mt-1">
                  <img
                    class="list_grid grid"
                    src="/grid.png"
                    :class="{active: view == 'grid'}"
                    @click="changeView('grid')"
                  >
                  <img
                    class="list_grid list"
                    src="/list.png"
                    :class="{active: view == 'list'}"
                    @click="changeView('list')"
                  >
                </div>
                <small class="mt-3">showing {{ startId }} - {{ stopId }} of {{ lengthOfProducts }}</small>
                <select
                  id="sortBy"
                  v-model="selectedSortOption"
                  @change="changeSortValue($event.target.value)"
                >
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
                v-for="item in display"
                :key="item.id"
                :lg="view == 'grid' ? 3 : null"
                :md="view == 'grid' ? 4 : null"
                :sm="view == 'grid' ? 3 : null"
                cols="12"
                class="p-1"
              >
                <ProductCard
                  v-show="view == 'grid'"
                  :products="item"
                />
                <ProductCardList
                  v-show="view == 'list'"
                  :products="item"
                />
                <hr
                  v-show="view == 'list'"
                  :products="item"
                >

                <br>
              </b-col>
            </b-row>
            <a-pagination
              v-model="current"
              :total="totalPages"
              show-less-items
            />
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
import filter from '@/mixins/filter'
import filterBoxWithBrand from '@/components/dataView/filterBoxWithBrand'
import filterBoxWithProductType from '@/components/dataView/filterBoxWithProductType'
import popularBox from '@/components/dataView/popularProducts'
import categoryHeader from '@/components/productView/categoryHeader'
import sort from '@/mixins/sort'
/* eslint-disable no-console */
import { fan } from '@/static/content/allFan'
import { mosquitoKiller } from '@/static/content/mosquitoKiller'
import { iron } from '@/static/content/iron'
// eslint-disable-next-line camelcase
import { insect_repellent } from '@/static/content/insect_repellent'
import { vaccum } from '~/static/content/vaccum'
import { fridge } from '~/static/content/fridge'
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
    ProductCard,
    filterBoxWithBrand,
    filterBoxWithProductType,
    categoryHeader,
    ProductCardList,
    popularBox
  },
  mixins: [filter, sort],
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
      filterItemBrand: [],
      filterItemProductType: [],
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
        case 'fan':
          return 'All Fans'
        case 'mosquitoKiller':
          return 'Mosquito Killers'
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
  border: 0px;
  outline: 0px;
  background: white;
}
.grid {
  width: 25px;
  height: 25px;
  cursor: pointer;
  opacity: 0.5;
}
.list {
  width: 35px;
  height: 38px;
  cursor: pointer;
  opacity: 0.5;
}
.active {
  opacity: 1;
}
.list_grid:hover {
  opacity: 1;
}
.col {
  padding: 0px;
}

.allFanContent {
  height: 200px;
  width: 100%;
  padding: 10px;
}
.row {
  justify-content: space-between;
}

.productListHeader {
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  display: flex;
  justify-content: space-between;
}
.filter_mobile_bar {
  width: 100%;
  height: 35px;
  background: #4686cd;
  cursor: pointer;
  outline: none;
  text-align: center;
  line-height: 35px;
  color: white;
}
.filter_mobile_bar:focus {
  background: #3f6896;
}
</style>
