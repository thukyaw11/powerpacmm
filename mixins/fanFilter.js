import { AllFans } from '@/static/content/allFan'
export default {
  data () {
    return {
      AllFans,
      totalPages: AllFans.length / 24 * 10
    }
  },
  methods: {
    setInitialValue () {
      this.totalPages = AllFans.length / 24 * 10
      this.display = this.AllFans.filter(element => element.id <= (this.current * 24) && element.id > (this.current * 24) - 24)
    },
    setFilteredData (checkBrand) {
      this.display = this.AllFans.filter(element => element.brand === checkBrand)

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
      this.display = this.AllFans.filter(element => element.id <= val * 24 && element.id > (val * 24) - 24)
    }
  }

}
