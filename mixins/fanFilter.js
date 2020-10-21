import { fan } from '@/static/content/allFan'
import { mosquitoKiller } from '@/static/content/mosquitoKiller'

export default {
  data () {
    return {
      fan,
      mosquitoKiller,
      routeName: this.$route.params.dataName,
      totalPages: this.$route.params.dataName.length / 24 * 10
    }
  },
  methods: {
    setInitialValue () {
      const length = this[this.routeName].length
      if (length <= 24) {
        this.totalPages = 10
      } else if (length <= 48) {
        this.totalPages = 20
      } else if (length <= 72) {
        this.totalPages = 30
      } else {
        this.totalPages = 40
      }
      // eslint-disable-next-line no-console
      console.log(this.totalPages)
      this.display = this[this.routeName].filter(element => element.id <= (this.current * 24) && element.id > (this.current * 24) - 24)
      this.startId = 1
      this.stopId = 24
    },
    setFilteredData (checkBrand) {
      this.display = this[this.routeName].filter(element => element.brand === checkBrand)
      this.totalPages = 10
      this.startId = this.display.length > 0 ? 1 : this.display.length
      this.stopId = this.display.length
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
      // eslint-disable-next-line no-console
      console.log(this.display)
      this.startId = this.display[0].id
      this.stopId = this.display[this.display.length - 1].id
    }
  }

}
