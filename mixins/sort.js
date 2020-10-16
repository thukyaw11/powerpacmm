import { fan } from '~/static/content/allFan'
import { mosquitoKiller } from '~/static/content/mosquitoKiller'
/* eslint-disable no-console */
export default {
  data () {
    return {
      fan,
      mosquitoKiller,
      selectedSortOption: 'Feature',
      options: ['Feature', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low-high', 'Price, high-low']
    }
  },
  methods: {
    changeSortValue (value) {
      switch (value) {
        case 'Feature' :
          this.setInitialValue()
          break
        case 'Price, low-high' :
          this.setInitialValue()

          this.sortByPrice(value)
          break
        case 'Price, high-low' :
          this.setInitialValue()

          this.sortByPrice(value)
          break
        case 'Alphabetically, A-Z' :
          this.setInitialValue()

          this.sortByAlphabet(value)
          break
        case 'Alphabetically, Z-A' :
          this.setInitialValue()

          this.sortByAlphabet(value)
          break
      }
    },
    sortByPrice (sortOrder) {
      this.display = this[this.$route.params.dataName].sort((a, b) => (sortOrder === 'Price, low-high' ? a.price - b.price : b.price - a.price))
      console.log(this.display)
    },
    sortByAlphabet (sortOrder) {
      if (sortOrder === 'Alphabetically, A-Z') {
        console.log(sortOrder)
        this.display = this[this.$route.params.dataName].sort(this.dynamicSort('productName'))
        console.log(this.display)
      } else {
        this.display = this[this.$route.params.dataName].reverse(this.dynamicSort('productName'))
      }
    },
    dynamicSort (property) {
      let sortOrder = 1

      if (property[0] === '-') {
        sortOrder = -1
        property = property.substr(1)
      }

      return function (a, b) {
        if (sortOrder === -1) {
          return b[property].localeCompare(a[property])
        } else {
          return a[property].localeCompare(b[property])
        }
      }
    }
  }
}
