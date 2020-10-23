/* eslint-disable no-console */
import { fan } from '@/static/content/allFan'
import { mosquitoKiller } from '@/static/content/mosquitoKiller'
import { iron } from '@/static/content/iron'
// eslint-disable-next-line camelcase
import { insect_repellent } from '@/static/content/insect_repellent'
import { vaccum } from '~/static/content/vaccum'

export default {
  data () {
    return {
      fan,
      mosquitoKiller,
      iron,
      insect_repellent,
      vaccum,
      routeName: this.$route.params.dataName,
      totalPages: this.$route.params.dataName.length / 24 * 10
    }
  },
  methods: {
    // fetch brand types from releated array
    getFilterItemfromMainData (mainData) {
      const duplicateItems = ['all']
      mainData.forEach((element) => {
        duplicateItems.push(element.brand)
      })
      this.filterItem = this.getUnique(duplicateItems)
    },
    // removing duplicate items from array
    getUnique (array) {
      const uniqueArray = []
      for (const value of array) {
        if (!uniqueArray.includes(value)) {
          uniqueArray.push(value)
        }
      }
      return uniqueArray
    },
    // set releated value on page loaded (messy code) refactor later
    setInitialValue () {
      const length = this[this.routeName].length
      if (length <= 24) {
        this.totalPages = 10
        this.stopId = length
      } else if (length <= 48) {
        this.totalPages = 20
        this.stopId = 24
      } else if (length <= 72) {
        this.totalPages = 30
        this.stopId = 24
      } else {
        this.totalPages = 40
        this.stopId = 24
      }
      this.display = this[this.routeName].filter(element => element.id <= (this.current * 24) && element.id > (this.current * 24) - 24)
      this.startId = 1
    },
    // set filtered data by brand
    setFilteredData (checkBrand) {
      this.display = this[this.routeName].filter(element => element.brand === checkBrand)
      this.totalPages = 10
      this.startId = this.display.length > 0 ? 1 : this.display.length
      this.stopId = this.display.length
    },
    // change list view and grid view
    changeView (viewValue) {
      this.view = viewValue
    }
  },
  created () {
    this.getFilterItemfromMainData(this[this.routeName])
    // set filtered value "all" on page loaded
    this.$nuxt.$on('my-custom-event', (toFilterValue) => {
      toFilterValue && toFilterValue !== 'all' ? this.setFilteredData(toFilterValue) : this.setInitialValue()
      if (toFilterValue === 'all') {
        this.setInitialValue()
      }
    })
  },
  watch: {
    // watching filter item with a-z,z-a,low-h,h-low etc..
    current (val) {
      this.current = val
      this.display = this[this.routeName].filter(element => element.id <= val * 24 && element.id > (val * 24) - 24)
      this.startId = this.display[0].id
      this.stopId = this.display[this.display.length - 1].id
    }
  }

}
