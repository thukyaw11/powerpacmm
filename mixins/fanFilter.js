import { fan } from '@/static/content/allFan'
import { mosquitoKiller } from '@/static/content/mosquitoKiller'

export default {
  data () {
    return {
      fan,
      mosquitoKiller,
      routeName: this.$route.params.dataName,
      totalPages: fan.length / 24 * 10
    }
  },
  methods: {
    setInitialValue () {
      this.totalPages = this[this.routeName].length / 24 * 10
      this.display = this[this.routeName].filter(element => element.id <= (this.current * 24) && element.id > (this.current * 24) - 24)
    },
    setFilteredData (checkBrand) {
      this.display = this[this.routeName].filter(element => element.brand === checkBrand)
      this.totalPages = 10
    },
    changeView (viewValue) {
      this.view = viewValue
    }
  },
  created () {
    this.$nuxt.$on('my-custom-event', (toFilterValue) => {
      toFilterValue && toFilterValue !== 'all' ? this.setFilteredData(toFilterValue) : this.setInitialValue()
      if (toFilterValue === 'all') {
        this.setInitialValue()
      }
    })
  },
  watch: {
    current (val) {
      this.current = val
      this.display = this[this.routeName].filter(element => element.id <= val * 24 && element.id > (val * 24) - 24)
      this.startId = this.display[0].id
      this.stopId = this.display[this.display.length - 1].id
    }
  }

}
